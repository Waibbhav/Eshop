export class Product {
  name: string | undefined;
  prod_id: number | undefined;
  price: number | undefined;
  des: string | undefined;
  category: string | undefined;
  subcategory: string | undefined;
  image: string | undefined;
}
export class category {
    category!: string;
    id!: number;
    c_img!: number;
    subcategory: any = [
      {
        name: '',
        sub_img: '',
      },
    ];
  }