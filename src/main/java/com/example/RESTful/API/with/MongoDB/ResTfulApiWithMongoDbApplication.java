package com.example.RESTful.API.with.MongoDB;

import com.example.RESTful.API.with.MongoDB.customer.Customer;
import com.example.RESTful.API.with.MongoDB.customer.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class RestfulApiWithMongoDbApplication implements CommandLineRunner {

	@Autowired
	private CustomerRepository repository;

	public static void main(String[] args) {

		SpringApplication.run(RestfulApiWithMongoDbApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		// clear repository
		repository.deleteAll();

		// create new data (customers)
		repository.save(new Customer("Geoff", "Smith"));
		repository.save(new Customer("Brodie", "Jenkins"));
		repository.save(new Customer("David", "Peterson"));
		repository.save(new Customer("Chris", "Wood"));
		repository.save(new Customer("Carl", "Adams"));
		repository.save(new Customer("Nina", "Widicombe"));
		repository.save(new Customer("Megan", "Morris"));
		repository.save(new Customer("Lorraine", "Johnson"));
		repository.save(new Customer("Kelly", "Babacamda"));
		repository.save(new Customer("Mitchell", "Webb"));
		repository.save(new Customer("Matthew", "Coales"));
		repository.save(new Customer("Ambrose", "Iyapot"));
		repository.save(new Customer("Ping", "Mee"));
		repository.save(new Customer("Martin", "Eccles"));
		repository.save(new Customer("Sam", "Sabien"));
		repository.save(new Customer("Navid", "Michaels"));
		repository.save(new Customer("Rajesh", "Mappings"));
		repository.save(new Customer("Xicong", "Jones"));
		repository.save(new Customer("Amber", "Jenkins"));

		// fetch all customers
		System.out.println();
		System.out.println("__________ Customers found with findAll(): __________");
		for (Customer customer : repository.findAll()) {
			System.out.println(customer);
		}
		System.out.println();
	}
}
