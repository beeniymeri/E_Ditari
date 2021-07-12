import { makeAutoObservable, runInAction } from "mobx";
import agent from "../API/agent";
import { Book } from "../models/book";
import { Nxenesi } from "../models/nxenesi";

export default class MesimdhenesiStore {
    nxenesit: Nxenesi[] = [];
    books: Book[] = [];
    selectedBook: Book | null = null;
    selectedNxenesi: Nxenesi | null = null;
    loading = false;
    loadingInitial = false;

    constructor(){
        makeAutoObservable(this)
    }

    
    filterNxenesit = async (nxenesiX: Nxenesi) => {
     this.setLoadingInitial(true);
     console.log(nxenesiX);
     try{
          const nxenesit = await agent.Nxenesit.list();
          nxenesit.forEach(nxenesi => {
               if(nxenesiX.emri.toUpperCase() !== '' && nxenesiX.mbiemri.toUpperCase() !== ''){
                    if(nxenesi.emri.toUpperCase().startsWith(nxenesiX.emri.toUpperCase()) && nxenesi.mbiemri.toUpperCase().startsWith(nxenesiX.mbiemri.toUpperCase())){
                         this.nxenesit.push(nxenesi);
                    }
               }else if(nxenesiX.emri.toUpperCase() !== ''){
                    if(nxenesi.emri.toUpperCase().startsWith(nxenesiX.emri.toUpperCase())){
                         this.nxenesit.push(nxenesi);
                    }
               }else{
                    if(nxenesi.mbiemri.toUpperCase().startsWith(nxenesiX.mbiemri.toUpperCase())){
                         this.nxenesit.push(nxenesi);
                    }
               }
          })
          this.setLoadingInitial(false);
     }catch(error){
          console.log(error);
          this.setLoadingInitial(false);
     }
    }

    removeNxenesit = async () => {
     this.setLoadingInitial(true);
     try{
          const nxenesit = await agent.Nxenesit.list();
          nxenesit.forEach(nxenesi => {
               this.nxenesit = [];
          })
          this.setLoadingInitial(false);
     }catch(error){
          console.log(error);
          this.setLoadingInitial(false);
     }
    }

    loadNxenesit = async () => {
     this.setLoadingInitial(true);
     try{
          const nxenesit = await agent.Nxenesit.list();
          nxenesit.forEach(nxenesi => {
           this.nxenesit.push(nxenesi);
          })
          this.setLoadingInitial(false);
     }catch(error){
          console.log(error);
          this.setLoadingInitial(false);
     }
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

   removeBooks = async () => {
     this.setLoadingInitial(true);
     try{
          const books = await agent.Books.list();
          books.forEach(book => {
               this.books = [];
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

   createNxenesi = async (nxenesi: Nxenesi) =>  {
        this.loading = true;
        try{
          await agent.Nxenesit.create(nxenesi);
          runInAction(() => {
               this.nxenesit.push(nxenesi);
               this.loading = false;
          })
        }catch(error){
             console.log(error);
             runInAction(() => {
                  this.loading = false;
             })
        }
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

   updateNxenesi = async (nxenesi: Nxenesi) => {
          this.loading = true;
          try{
               await agent.Nxenesit.update(nxenesi);
               runInAction(() => {
                   this.nxenesit = [...this.nxenesit.filter(n => n.nxenesiID !== nxenesi.nxenesiID), nxenesi];
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

   deleteNxenesi = async (id: string) => {
        this.loading = true;
        try{
          await agent.Nxenesit.delete(id);
          runInAction(() => {
               this.nxenesit = [...this.nxenesit.filter(n => n.nxenesiID !== id)];
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
