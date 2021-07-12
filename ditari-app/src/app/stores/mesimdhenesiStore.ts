import { makeAutoObservable, runInAction } from "mobx";
import agent from "../API/agent";
import { Book } from "../models/book";

export default class MesimdhenesiStore {
    books: Book[] = [];
    selectedBook: Book | null = null;
    loading = false;
    loadingInitial = false;
  static loadingInitial: any;

    constructor(){
        makeAutoObservable(this)
    }

   loadBooks = async () => {
    this.setLoadingInitial(true);
    try{
         const books = await agent.Books.list();
         books.forEach(book => {
          this.books.push(book);
         })
         this.setLoadingInitial(false);
    }catch(error){
         console.log(error);
         this.setLoadingInitial(false);
    }
   }

   setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
   }

   createBook = async (book: Book) =>  {
     this.loading = true;
     try{
       await agent.Books.create(book);
       runInAction(() => {
            this.books.push(book);
            this.loading = false;
       })
     }catch(error){
          console.log(error);
          runInAction(() => {
               this.loading = false;
          })
     }
     }

   updateBook = async (book: Book) => {
          this.loading = true;
          try{
               await agent.Books.update(book);
               runInAction(() => {
                    this.books = [...this.books.filter(b => b.id !== book.id), book];
                    this.loading = false;
                })
          }catch(error){
               console.log(error);
               runInAction(() => {
               this.loading = false;
          })
     }

     }

   deleteBook = async (id: string) => {
     this.loading = true;
     try{
       await agent.Books.delete(id);
       runInAction(() => {
            this.books = [...this.books.filter(b => b.id !== id)];
            this.loading = false;
       })
     }catch(error){
          console.log(error);
          runInAction(() => {
               this.loading = false;
          })
     }
}

}
