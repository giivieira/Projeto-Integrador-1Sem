import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.IOException;

public class projetointegrador {
    public static <Document, Elements, Element> void main(String[] args) {
        try {
            // Carrega a página HTML da loja
            org.jsoup.nodes.Document doc = Jsoup.connect("file:///T:/1DES-TB/Giovanna%20Vieira%20de%20Souza%20Braz/Projeto-Integrador/index.html#home").get();

            // Seletor CSS para os elementos que contêm os produtos
            String productSelector = ".product";

            // Extrai os elementos que correspondem ao seletor
            org.jsoup.select.Elements products = doc.select(productSelector);

            // Itera sobre os elementos de produto e extrai os nomes e preços
            for (org.jsoup.nodes.Element product : products) {
                // Seletor CSS para o nome do produto
                String nameSelector = ".title";

                // Seletor CSS para o preço do produto
                String priceSelector = ".preco";

                // Extrai o nome e preço do produto
                String name = product.select(nameSelector).text();
                String price = product.select(priceSelector).text();

                // Imprime o nome e preço do produto
                System.out.println("Nome: " + name);
                System.out.println("Preço: " + price);
                System.out.println("--------------------");
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}