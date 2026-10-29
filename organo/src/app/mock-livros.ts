import { Livro } from "./componentes/livro/livro";

export const livros: Livro[] = [
    {
        titulo: "The Lord of the Rings",
        autoria: "J.R.R. Tolkien",
        favorito: false,
        genero: {
            id: "ficcao-cientifica",
            nome: "Ficção Científica",
            livros: []
        },
        capa: "https://m.media-amazon.com/images/I/81hCVEC0ExL.jpg"
    },
    {
        titulo: "The Notebook",
        autoria: "Nicholas Sparks",
        favorito: false,
        genero: {
            id: "romance",
            nome: "Romance",
            livros: []
        },
        capa: "https://m.media-amazon.com/images/I/81-X60ARMYL._UF1000,1000_QL80_.jpg"
    },
    {
        titulo: "Harry Potter and the Sorcerer's Stone",
        autoria: "J.K. Rowling",
        favorito: false,
        genero: {
            id: "fantasia",
            nome: "Fantasia",
            livros: []
        },
        capa: "https://m.media-amazon.com/images/I/81jkdzPNSNL.jpg"
    },
    {
        titulo: "O Iluminado",
        autoria: "Stephen King",
        favorito: false,
        genero: {
            id: "suspense",
            nome: "Suspense",
            livros: []
        },
        capa: "https://m.media-amazon.com/images/I/8147kKLLvOL._AC_UF1000,1000_QL80_.jpg"
    },
    // {
    //     titulo: "Assassinato no Expresso do Oriente",
    //     autoria: "Agatha Christie",
    //     favorito: false,
    //     genero: {
    //         id: "misterio",
    //         nome: "Mistério",
    //         livros: []
    //     },
    //     capa: "https://m.media-amazon.com/images/I/81Zp6MFxIDL.jpg"
    // },
    {
        titulo: "Drácula",
        autoria: "Bram Stoker",
        favorito: false,
        genero: {
            id: "terror",
            nome: "Terror",
            livros: []
        },
        capa: "https://m.media-amazon.com/images/I/61MgodE1s0L.jpg"
    }
]
