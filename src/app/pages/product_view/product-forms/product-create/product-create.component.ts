import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../shared/product.service';
import { NbDialogService } from '@nebular/theme';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductInputDTO } from '../../models/ProductInputDTO';
@Component({
  selector: 'ngx-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
  to_query_status: number;
  action: string;
  product: ProductInputDTO;
  constructor(private productService: ProductService, 
    private dialogService: NbDialogService, private route: ActivatedRoute, private router: Router) {
    route.params.subscribe(params => {
      if (params['action'] === "create") {
        this.action = "Inserisci";
        this.to_query_status = 0;
      } else {
        this.to_query_status = 1;
        this.action = "Modifica";
      };
      console.log(params)
    });
    router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  ngOnInit(): void {}
  perform(name, surname, businessName, vatNumber,
    country, city, municipality, street, streetNumber, cap, email, phoneNumber){
      let productInputDTO: ProductInputDTO | Record<string, never> = {};
      productInputDTO  = new ProductInputDTO(name, surname, businessName, vatNumber,
        country);
      this.productService.createProduct(productInputDTO).subscribe(returnedObj => {
        this.router.navigate(["../../../product/list/active"], {
          relativeTo: this.route,
        });  
      });
    }

  }

