from dataclasses import field
from gc import callbacks
from pydoc import describe
from tracemalloc import start
from scrapy.item import Field
from scrapy.item import Item
from scrapy.spiders import CrawlSpider, Rule
from scrapy.selector import Selector
from scrapy.loader.processors import MapCompose
from scrapy.linkextractors import LinkExtractor
from scrapy.loader import ItemLoader

class Articulo(Item): #items que encesito buscar
    titulo =Field()
    precio = Field()
    descripcion =Field()
    
class MercadoLibreCrawler(CrawlSpider):
    name = 'mercadoLibre'
    custom_settings={
        'USER_AGENT': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36',
        'CLOSESPIDER_PAGECOUNT': 20 #paginacion
    }
    
    download_dely=1 # tiempo entre pagina
    
    allowed_domines =['listado.mercadolibre.com.co','articulo.mercadolibre.com.co'] #restringir busqueda
    
    start_urls = ['https://listado.mercadolibre.com.co/medicamentos/'] #pagina a buscar
    
    #definir las reglas en una tupla
    rules = (
        #paginacion
        Rule(
            LinkExtractor(
                allow=r'/medicamentos_Desde_'
            ), follow=True
        ),
        #detalles producto
        Rule(
            LinkExtractor(
                allow=r'/MCO-'
            ), follow =True, callback='parse_items'
        ),
    )
    
    def parse_item(self,response):
        
        item = ItemLoader(Articulo(),response)
        item.add_xpath('titulo', '//div[@class="ui-pdp-header__title-container"]/h1/text()')
        item.add_xpath('descripcion', '//div[@class=ui-pdp-description"]/p/text()')
        item.add_xpath('precio', '//span[@class="andes-money-amount__fraction"]')
        
        yield item.load_item()