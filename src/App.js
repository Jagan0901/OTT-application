// import logo from './logo.svg';
import './App.css';
import {  useState } from 'react';
// import {Originals} from './originals';
import { AddColor } from './AddColor';
import { Routes,Route, useNavigate, Navigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { WebSeriesDetail } from './WebSeriesDetail';
import { MovieDetail } from './MovieDetail';
import { Add_TV_Shows } from './Add_TV_Shows';
import { Add_Movies } from './Add_Movies';
import { Home } from './Home';
import { TV_Shows } from './TV_Shows';
import { Movies } from './Movies';
import { NotFoundPage } from './NotFoundPage';
import { EditMovies } from './EditMovies';
import { EditShows } from './EditShows';
import { BasicForm } from './BasicForm';


// const INITIAL_SERIES_LIST =  [
//   {
//     id : "001",
//     name:'Game of Thrones',
//     poster: 'https://i.pinimg.com/564x/b5/14/d7/b514d7b6fa66fc12105aaf631b88dd12.jpg',
//     rating : 9.2,
//     summary: "The series is based on George R. R. Martin's series of fantasy novels, A Song of Ice and Fire. The series takes place on the fictional continents of Westeros and Essos, and chronicles the power struggles among noble families as they fight for control of the Iron Throne of the Seven Kingdoms.",  
//     trailer: "https://www.youtube.com/embed/rlR4PJn8b8I",
//     casts : 
//        [
//         {
//           name : "Emilia Clarke",
//           pic  : "https://i.pinimg.com/236x/1e/ba/4e/1eba4e1d24678405e1c65f3309436e34.jpg"
//         },
//         {
//           name : "Sophie Turner",
//           pic  : "https://i.pinimg.com/236x/17/0e/f5/170ef5ca8c418e9d91884a3e2b2b2023.jpg"
//         },
//         {
//           name : 'Kit Harington',
//           pic  : "https://i.pinimg.com/236x/33/ad/86/33ad864e37d710046df85a05930e1963.jpg"
//         },
//         {
//           name : 'Jason Momoa',
//           pic  : "https://i.pinimg.com/236x/ca/b2/03/cab2033f311e182ba7eaa1f334ab06e8.jpg"
//         },
//         {
//           name : 'Peter Dinklage',
//           pic  : "https://i.pinimg.com/236x/19/1f/8b/191f8b8c5fb4cd67655559986eca1969.jpg"
//         },
//         {
//           name : 'Esmé Bianco',
//           pic  : "https://i.pinimg.com/236x/89/c7/2f/89c72f75119ae74ac35a1eb4654fd2a2.jpg"
//         }
//       ]     
//   },    
//   {
//     id : "002",
//     name:'The Originals',
//     poster: 'https://i.pinimg.com/564x/2a/b3/50/2ab350d2aa4663cb79ae4029104457ae.jpg',
//     rating : 8.3,
//     summary: 'The series follows vampire-werewolf hybrid Klaus Mikaelson as he and his family become embroiled in the supernatural politics of the French Quarter of New Orleans.',  
//     trailer: "https://www.youtube.com/embed/hRcuf42Evt4",
//     casts : 
//        [
//         {
//           name : "Joseph Morgan",
//           pic  : "https://i.pinimg.com/236x/e9/66/5f/e9665f2d7ce2f8b05a7a28c7f5d222c5.jpg"
//         },
//         {
//           name : "Daniel Gillies",
//           pic  : "https://i.pinimg.com/236x/9e/c3/b3/9ec3b32a886a9e18ecd5459b61f827b8.jpg"
//         },
//         {
//           name : 'Charles Michael Davis',
//           pic  : "https://i.pinimg.com/236x/1e/6a/ce/1e6ace18f10724f1586cd7c9d72d8c89.jpg"
//         },
//         {
//           name : 'Phoebe Tonkin',
//           pic  : "https://i.pinimg.com/236x/78/86/4b/78864b27af96e5f9a4bcd3aa80ef561c.jpg"
//         },
//         {
//           name : 'Claire Holt',
//           pic  : "https://i.pinimg.com/236x/d0/f7/5b/d0f75b8f215d27a801c9112be7145e61.jpg"
//         },
//         {
//           name : 'Danielle Rose Russell',
//           pic  : "https://i.pinimg.com/236x/17/f1/11/17f111bf15035f9543c824fbb1dab08f.jpg"
//         }
//       ]     
//   },
//   {
//     id : "003",
//     name:'Breaking Bad',
//     poster: 'https://i.pinimg.com/564x/4e/7d/89/4e7d89f47058341e247f90f6dceb20fe.jpg',
//     rating : 9.5,
//     summary: 'The mishaps of two drug dealers trying to survive in the complicated and corrupted world of crime, leading them from the point of working for money to working to survive.',  
//     trailer: "https://www.youtube.com/embed/2gTC4uWP3_Y" ,
//     casts : 
//        [
//         {
//           name : "Bryan Cranston",
//           pic  : "https://i.pinimg.com/236x/6c/db/c4/6cdbc4649af2f8283000eaa98cff26f7.jpg"
//         },
//         {
//           name : "Aaron Paul",
//           pic  : "https://i.pinimg.com/236x/2e/40/65/2e406510086c7951db9e7122a278b2ee.jpg"
//         },
//         {
//           name : 'Anna Gunn',
//           pic  : "https://i.pinimg.com/236x/8a/7c/ff/8a7cfff3da7944a8e4c74c708d4392ec.jpg"
//         },
//         {
//           name : 'Dean Norris',
//           pic  : "https://i.pinimg.com/236x/ac/25/69/ac2569d4c180610720eb98f45793f6b0.jpg"
//         },
//         {
//           name : 'Jonathan Banks',
//           pic  : "https://i.pinimg.com/236x/01/18/8a/01188acf84ef3358d9bfdf628d8247ff.jpg"
//         },
//         {
//           name : 'Giancarlo Esposito',
//           pic  : "https://i.pinimg.com/236x/99/45/46/9945463df419f7b0a0af8d32e306fd57.jpg"
//         }
//       ]     
//   },    
//   {
//   id : "004",  
//   name:'The Vampire Diaries',
//   poster: 'https://i.pinimg.com/564x/16/13/e6/1613e6ef9ebf2eaec46b262aedfb5ff5.jpg',
//   rating : 7.7,
//   summary: 'The series is set in the fictional town of Mystic Falls, Virginia, a town charged with supernatural history. It follows the life of Elena Gilbert, a teenage girl who has just lost both parents in a car accident, as she falls in love with a 162-year-old vampire named Stefan Salvatore.',  
//   trailer: "https://www.youtube.com/embed/zAa_RgTeO7g",
//   casts : 
//   [
//     {
//       name : 'Candice King',
//       pic  : "https://i.pinimg.com/236x/aa/f3/a2/aaf3a2cacb15f7342868db199a5cf9f2.jpg"
//     },    
//     {
//       name : "Nina Dobrev",
//       pic  : "https://i.pinimg.com/236x/5d/aa/9c/5daa9c5de43b007d0bd09273b44c6805.jpg"
//     },    
//    {
//      name : "Paul Wesley",
//      pic  : "https://i.pinimg.com/236x/20/66/2b/20662b669ad4dc12801256f0a28ceff5.jpg"
//    },
//    {
//      name : 'Ian Somerhalder',
//      pic  : "https://i.pinimg.com/236x/79/b1/34/79b134029921b9f98dc45829398f93dc.jpg"
//    },
//    {
//      name : 'Kat Graham',
//      pic  : "https://i.pinimg.com/236x/c2/f7/e3/c2f7e36d83c8d150e66b2a26d7bafc34.jpg"
//    },
//    {
//      name : 'Sara Canning',
//      pic  : "https://i.pinimg.com/236x/43/26/b9/4326b9341db16ea963c861bf5ba4a9a4.jpg"
//    }
//  ]     
// },
//   {
//    id : "005", 
//    name:'Peaky Blinders',
//    poster: 'https://i.pinimg.com/564x/dc/b3/fc/dcb3fc7203203989e52729957e8c77d2.jpg',
//    rating : 8.8,
//    summary: 'A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby. Thomas Shelby and his brothers return to Birmingham after serving in the British Army during WWI.',  
//    trailer: "https://www.youtube.com/embed/PxZ5gGfPtCQ",
//    casts : 
//    [
//     {
//       name : "Cillian Murphy",
//       pic  : "https://i.pinimg.com/236x/b4/4c/67/b44c670d024363bb6d3e0f5b1b6cf5d8.jpg"
//     },
//     {
//       name : "Paul Anderson",
//       pic  : "https://i.pinimg.com/236x/76/84/b4/7684b45d2e6a1c16f2fe2c8f06b8d95b.jpg"
//     },
//     {
//       name : 'Tom Hardy',
//       pic  : "https://i.pinimg.com/236x/d7/59/ca/d759ca42a286c6b731c5a44591a13dbd.jpg"
//     },
//     {
//       name : 'Helen McCrory',
//       pic  : "https://i.pinimg.com/236x/7b/46/10/7b46102f01b22cb8c4e341869fccba51.jpg"
//     },
//     {
//       name : 'Sophie Rundle',
//       pic  : "https://i.pinimg.com/236x/63/f7/c6/63f7c645f1b5fc887b39c9efb65b48cd.jpg"
//     },
//     {
//       name : 'Annabelle Wallis',
//       pic  : "https://i.pinimg.com/236x/3b/7e/3e/3b7e3e75f0f556bf4318116c228fca20.jpg"
//     }
//   ]    
//   },
//   {
//     id : "006",
//     name:'Sherlock',
//     poster: 'https://i.pinimg.com/564x/6a/3e/88/6a3e88a92c10515cc52271c53c454ea4.jpg',
//     rating : 9.1,
//     summary: "Dr Watson, a former army doctor, finds himself sharing a flat with Sherlock Holmes, an eccentric individual with a knack for solving crimes. Together, they take on the most unusual cases.",  
//     trailer: "https://www.youtube.com/embed/qlcWFoNqZHc",
//     casts : 
//        [
//         {
//           name : "Benedict Cumberbatch",
//           pic  : "https://i.pinimg.com/236x/b4/08/08/b40808993c178b9880bdaf17f20e5b5a.jpg"
//         },
//         {
//           name : "Martin Freeman",
//           pic  : "https://i.pinimg.com/236x/d1/64/d9/d164d93afa8aec79104f35735ea7f5d2.jpg"
//         },
//         {
//           name : 'Mark Gatiss',
//           pic  : "https://i.pinimg.com/236x/c8/64/1b/c8641b557c2b83e4ea6a6c32b148fd12.jpg"
//         },
//         {
//           name : 'Andrew Scott',
//           pic  : "https://i.pinimg.com/236x/32/24/8d/32248d114ad887938a3d528109106b71.jpg"
//         },
//         {
//           name : 'Louise Brealey',
//           pic  : "https://i.pinimg.com/236x/d3/2c/f0/d32cf0a53775867b0322b463135f4c72.jpg"
//         },
//         {
//           name : 'Siobhan Hewlett',
//           pic  : "https://i.pinimg.com/236x/90/f9/4f/90f94f0f86d9b2d98e8de3c316782c66.jpg"
//         }
//       ]      
//   },                                 
//   {
//     id : "007",
//     name:'Stranger Things',
//     poster: 'https://i.pinimg.com/564x/88/56/4f/88564fb3a6a56236d00851382b59a036.jpg',
//     rating : 8.7,
//     summary: 'After the mysterious and sudden vanishing of a young boy, the people of a small town begin to uncover secrets of a government lab, portals to another world and sinister monsters.',
//     trailer: "https://www.youtube.com/embed/yQEondeGvKo",
//     casts : 
//        [
//         {
//           name : "Millie Bobby Brown",
//           pic  : "https://i.pinimg.com/236x/c2/44/05/c2440578eadaf1359f1330bc197d0dbd.jpg"
//         },
//         {
//           name : "Sadie Sink",
//           pic  : "https://i.pinimg.com/236x/37/86/f8/3786f82ae12111186c17fd2990e96bcf.jpg"
//         },
//         {
//           name : 'Gaten Matarazzo',
//           pic  : "https://i.pinimg.com/236x/ae/2a/82/ae2a821b8dd2572ff4852d6494611c94.jpg"
//         },
//         {
//           name : 'Joe Keery',
//           pic  : "https://i.pinimg.com/236x/cc/54/74/cc54742b8855c5598194f70fc9729946.jpg"
//         },
//         {
//           name : 'David Harbour',
//           pic  : "https://i.pinimg.com/236x/a2/2d/02/a22d02cc6809563bf5f62b0678415477.jpg"
//         },
//         {
//           name : 'Dacre Montgomery',
//           pic  : "https://i.pinimg.com/236x/6e/79/a7/6e79a7af9edfbdd0458b3437f8aa8b7a.jpg"
//         }
//       ]     
//   },
//   {
//     id : "008",
//     name:'Dark',
//     poster: 'https://i.pinimg.com/564x/53/e4/cf/53e4cffec31c467e3ef89766fc13258f.jpg',
//     rating : 8.7,
//     summary: "The story follows characters from the fictional village of Winden, Germany, as they pursue the truth in the aftermath of a child's disappearance.",  
//     trailer: "https://www.youtube.com/embed/cq2iTHoLrt0",
//     casts : 
//        [
//         {
//           name : "Lisa Vicari",
//           pic  : "https://i.pinimg.com/236x/57/9c/23/579c23c6767da284ac9c226636a591c9.jpg"
//         },
//         {
//           name : "Louis Hofmann",
//           pic  : "https://i.pinimg.com/236x/41/25/17/412517c6622e23ffe99557a24760fa68.jpg"
//         },
//         {
//           name : 'Andreas Pietschmann',
//           pic  : "https://i.pinimg.com/736x/73/b4/f2/73b4f2b2ba20d8565930e1f203fd4a66.jpg"
//         },
//         {
//           name : 'Gina Stiebitz',
//           pic  : "https://i.pinimg.com/236x/62/33/53/623353ce21280198aa33905bac76c049.jpg"
//         },
//         {
//           name : 'Maja Schöne',
//           pic  : "https://i.pinimg.com/236x/c2/5c/69/c25c696f62a14fd31c4db6e639dd507b.jpg"
//         },
//         {
//           name : 'Oliver Masucci',
//           pic  : "https://i.pinimg.com/236x/0b/92/d1/0b92d1ea00ebe381bf6bd75996efaa13.jpg"
//         }
//       ]      
//   },        
//   {
//     id : "009",
//     name:'13 Reasons Why',
//     poster: 'https://i.pinimg.com/564x/25/ce/82/25ce826e1d8e60eb369e6a0000d2febc.jpg',
//     rating : 7.5,
//     summary: 'The recordings of a girl named Hannah Baker who commited suicide, helping her lover Clay Jensen uncover the story behind her suicide and confronting each and every single of the culprits who lead her to commit suicide.',  
//     trailer: "https://www.youtube.com/embed/poUq9ypynKs",
//     casts : 
//        [
//         {
//           name : "Katherine Langford",
//           pic  : "https://i.pinimg.com/236x/01/82/9e/01829e2d251e21ab8c4e0610a9204c92.jpg"
//         },
//         {
//           name : "Dylan Minnette",
//           pic  : "https://i.pinimg.com/236x/b5/12/31/b51231633e12f6780dc550fe71acc9e6.jpg"
//         },
//         {
//           name : 'Alisha Boe',
//           pic  : "https://i.pinimg.com/236x/21/e1/32/21e13299023b1f3b53b4a4ef271bd39b.jpg"
//         },
//         {
//           name : 'Brandon Flynn',
//           pic  : "https://i.pinimg.com/236x/27/dd/04/27dd048f0d96037198d1b64a9bf39162.jpg"
//         },
//         {
//           name : 'Christian Navarro',
//           pic  : "https://i.pinimg.com/originals/d8/46/a6/d846a63eeda55e6e90fc87ed3bada666.jpg"
//         },
//         {
//           name : 'Anne Winters',
//           pic  : "https://i.pinimg.com/236x/e4/af/56/e4af561f90d847c3a1712d234c42073f.jpg"
//         }
//       ]      
//   },
//   {
//     id : "010",
//     name:'Legacies',
//     poster: 'https://i.pinimg.com/564x/ed/81/4e/ed814e585afc351bd474993bdb56c645.jpg',
//     rating : 7.3,
//     summary: "Legacies follows Hope Mikaelson, the daughter of Klaus Mikaelson and Hayley Marshall, who is descended from some of the most powerful vampire, werewolf, and witch bloodlines. Two years after the events of The Originals, 17-year-old Hope attends the Salvatore School for the Young and Gifted.",  
//     trailer: "https://www.youtube.com/embed/nb2Ii0xmOJs",
//     casts : 
//        [
//         {
//           name : "Danielle Rose Russell",
//           pic  : "https://i.pinimg.com/236x/17/f1/11/17f111bf15035f9543c824fbb1dab08f.jpg"
//         },
//         {
//           name : "Kaylee Bryant",
//           pic  : "https://i.pinimg.com/originals/4a/00/b0/4a00b0dc1110d2380d5e9e93017b605e.jpg"
//         },
//         {
//           name : 'Jenny Boyd',
//           pic  : "https://i.pinimg.com/236x/f8/f9/a1/f8f9a1ba50dce39d0c9b1da90d4bbfff.jpg"
//         },
//         {
//           name : 'Aria Shahghasemi',
//           pic  : "https://i.pinimg.com/236x/2b/a7/4c/2ba74cf76aa9632edb0b024d2d0619bf.jpg"
//         },
//         {
//           name : 'Matt Davis',
//           pic  : "https://i.pinimg.com/236x/0d/a7/d5/0da7d57a7a5c50c5f35eeef5c7ed6ce7.jpg"
//         },
//         {
//           name : 'Courtney Bandeko',
//           pic  : "https://i.pinimg.com/236x/51/02/c9/5102c9035fb689ac2ef19973c81e60e4.jpg"
//         }
//       ]      
//   },    
//   {
//     id : "011",
//     name:'Friends',
//     poster: 'https://i.pinimg.com/564x/1d/ec/af/1decafeb3e7d31f4adb3d5dee66717ed.jpg',
//     rating : 9,
//     summary: "Follow the lives of six reckless adults living in Manhattan, as they indulge in adventures which make their lives both troublesome and happening.",  
//     trailer: "https://www.youtube.com/embed/IEEbUzffzrk",
//     casts : 
//        [
//         {
//           name : "Jennifer Aniston",
//           pic  : "https://i.pinimg.com/236x/25/f0/c4/25f0c488722c675f80dea36b65e16fd3.jpg"
//         },
//         {
//           name : "Lisa Kudrow",
//           pic  : "https://i.pinimg.com/236x/2f/34/46/2f34462f7607f4abdafca49cdb631112.jpg"
//         },
//         {
//           name : 'David Schwimmer',
//           pic  : "https://i.pinimg.com/236x/89/3f/bb/893fbba138fb736777fb194d1eee3613.jpg"
//         },
//         {
//           name : 'Matthew Perry',
//           pic  : "https://i.pinimg.com/236x/24/58/d9/2458d9c63922e7621b269afffc484e15.jpg"
//         },
//         {
//           name : 'Courteney Cox',
//           pic  : "https://i.pinimg.com/236x/bc/4e/1c/bc4e1cf726cbec4a96bd1a03f6fa158a.jpg"
//         },
//         {
//           name : 'Matt LeBlanc',
//           pic  : "https://i.pinimg.com/236x/79/88/5e/79885e57d142f412713c977f29b11b35.jpg"
//         }
//       ]      
//   },    
//   {
//     id : "012",
//     name:'Prison Break',
//     poster: 'https://i.pinimg.com/564x/d1/f2/a2/d1f2a283afa65cce39d016143ad9a3ca.jpg',
//     rating : 8.3,
//     summary: "Due to a political conspiracy, an innocent man is sent to death row and his only hope is his brother, who makes it his mission to deliberately get himself sent to the same prison in order to break the both of them out, from the inside.",  
//     trailer:"https://www.youtube.com/embed/AL9zLctDJaU",
//     casts : 
//        [
//         {
//           name : "Wentworth Miller",
//           pic  : "https://i.pinimg.com/236x/f4/8e/af/f48eafb8a16442a784deef0550c5dd66.jpg"
//         },
//         {
//           name : "Dominic Purcell",
//           pic  : "https://i.pinimg.com/236x/34/78/d3/3478d3e23b0324fc6cba3d49b8ba4452.jpg"
//         },
//         {
//           name : 'Sarah Wayne Callies',
//           pic  : "https://i.pinimg.com/236x/58/71/27/587127b92bb072c28b8af379ec42dde0.jpg"
//         },
//         {
//           name : 'Camille Guaty',
//           pic  : "https://i.pinimg.com/236x/fd/a4/49/fda449e6acc9dbd94b1c11d7536baaa0.jpg"
//         },
//         {
//           name : 'Inbar Lavi',
//           pic  : "https://i.pinimg.com/236x/27/b4/ac/27b4acafdc187516d7268b6830f2d8a2.jpg"
//         },
//         {
//           name : 'Marshall Allman',
//           pic  : "https://i.pinimg.com/236x/fb/6d/0a/fb6d0a5e98532c3c7762bef6076734ac.jpg"
//         }
//       ]      
//   },
// ];




// const INITIAL_MOVIES_LIST = [
//   {
//     id: "001",
//     name: 'The Dark Knight',
//     poster: 'https://i.pinimg.com/564x/d7/e6/d1/d7e6d1128af050e5e722591ab39b7867.jpg',
//     rating: 9,
//     summary: "After Gordon, Dent and Batman begin an assault on Gotham's organised crime, the mobs hire the Joker, a psychopathic criminal mastermind who offers to kill Batman and bring the city to its knees.",
//     trailer:"https://www.youtube.com/embed/EXeTwQWrcwY" ,
//     casts : 
//        [
//         {
//           name : "Christian Bale",
//           pic  : "https://i.pinimg.com/564x/4c/c6/f1/4cc6f1f365fce288fcae170fa17b6875.jpg"
//         },
//         {
//           name : "Heath Ledger",
//           pic  : "https://i.pinimg.com/564x/73/55/2e/73552ed7fc52a7c93bc4939147d76540.jpg"
//         },
//         {
//           name : 'Aaron Eckhart',
//           pic  : "https://i.pinimg.com/564x/bd/58/60/bd58606c1a3b21ca881a5407158cde7a.jpg"
//         },
//         {
//           name : 'Michael Caine',
//           pic  : "https://i.pinimg.com/564x/65/ef/6d/65ef6d0444a3a2f2b2f7838dcd97a909.jpg"
//         },
//         {
//           name : 'Maggie Gyllenhaal',
//           pic  : "https://i.pinimg.com/564x/43/e0/15/43e0156e686239692fc343935f98ccff.jpg"
//         },
//         {
//           name : 'Gary Oldman',
//           pic  : "https://i.pinimg.com/236x/7c/a0/35/7ca035ef341bda3b45d45f38249ad888.jpg"
//         }
//       ]    
//   },
//   {
//     id: "002",
//     name: 'Inception',
//     poster: 'https://i.pinimg.com/564x/7c/88/d5/7c88d530f9cf8c8661295ef5d2921a86.jpg',
//     rating: 8.8,
//     summary: "Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.",
//     trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
//     casts : 
//        [
//         {
//           name : "Leonardo Dicaprio",
//           pic  : "https://i.pinimg.com/236x/63/ec/41/63ec412052730a603b58064ec0d9aca7.jpg"
//         },
//         {
//           name : "Joseph Gordon-Levitt",
//           pic  : "https://i.pinimg.com/236x/6a/48/62/6a4862193deabe05bb21ee4b8b50e284.jpg"
//         },
//         {
//           name : 'Elliot Page',
//           pic  : "https://i.pinimg.com/236x/84/0d/10/840d106688bd846bafa9c50d047fbea1.jpg"
//         },
//         {
//           name : 'Ken Watanabe',
//           pic  : "https://i.pinimg.com/236x/55/12/8a/55128ab03ce639f35fa48a845257901c.jpg"
//         },
//         {
//           name : 'Tom Hardy',
//           pic  : "https://i.pinimg.com/236x/04/07/97/040797c27150259db0b010be8bdf6da3.jpg"
//         },
//         {
//           name : 'Dileep Rao',
//           pic  : "https://i.pinimg.com/236x/94/ad/f2/94adf2cf0c0185c538571cfb270edc0a.jpg"
//         }
//       ]    
//   },
//   {
//     id: "003",
//     name: 'Interstellar',
//     poster: 'https://i.pinimg.com/564x/74/0d/6a/740d6a357af69c2be1e911beebc37895.jpg',
//     rating: 8.6,
//     summary: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
//     trailer:"https://www.youtube.com/embed/zSWdZVtXT7E",
//     casts : 
//        [
//         {
//           name : "Matthew McConaughey",
//           pic  : "https://i.pinimg.com/236x/18/51/73/185173ef6b380ed4c6006c2b4f5c44f0.jpg"
//         },
//         {
//           name : "Anne Hathaway",
//           pic  : "https://i.pinimg.com/236x/66/e6/93/66e693b760a46f3e9d70bbb33d64ebe2.jpg"
//         },
//         {
//           name : 'Jessica chastain',
//           pic  : "https://i.pinimg.com/236x/d6/69/38/d6693831a33be7289fb0d3b5bb04cd28.jpg"
//         },
//         {
//           name : 'Mackenzie foy',
//           pic  : "https://i.pinimg.com/236x/65/2d/9a/652d9a4e68eb31a0a92e2f200d0df2ea.jpg"
//         },
//         {
//           name : 'Ellen burstyn',
//           pic  : "https://i.pinimg.com/236x/1c/c6/1b/1cc61bca9df381324430d0ffd95ab8e5.jpg"
//         },
//         {
//           name : 'John lithgow',
//           pic  : "https://i.pinimg.com/564x/c7/bc/5e/c7bc5e00670eaf5950c9624aa14ba3ad.jpg"
//         }
//       ]
//   },  
//   {
//     id: "004",
//   name: 'KGF Chapter 2',
//   poster: 'https://i.pinimg.com/564x/f2/c8/43/f2c8430afff5c23e04efe3c522ef2a4b.jpg',
//   rating: 8.3,
//   summary: 'The blood-soaked land of Kolar Gold Fields has a new overlord now, Rocky, whose name strikes fear in the heart of his foes. His allies look up to him as their Savior, the government sees him as a threat, and his enemies are clamouring for revenge.',
//   trailer:"https://www.youtube.com/embed/Qah9sSIXJqk",
//   casts : 
//   [
//    {
//      name : "Yash",
//      pic  : "https://i.pinimg.com/236x/40/e8/8f/40e88fc6b47ab8a54797cd7a1c9184a9.jpg"
//    },
//    {
//      name : "Srinidhi Shetty",
//      pic  : "https://i.pinimg.com/236x/51/99/a2/5199a2cc1645e3cf6a31e446ab7a7abc.jpg"
//    },
//    {
//      name : 'Sanjay Dutt',
//      pic  : "https://i.pinimg.com/236x/e0/c1/8e/e0c18e5ee5400b58bad283c779a246ee.jpg"
//    },
//    {
//      name : 'Archana Jois',
//      pic  : "https://i.pinimg.com/236x/c8/9f/91/c89f916dd70997989ca84444a3323437.jpg"
//    },
//    {
//      name : 'Raveena Tandon',
//      pic  : "https://i.pinimg.com/236x/99/9c/43/999c43ed4114d7744cadab15fe6eca1f.jpg"
//    },
//    {
//      name : 'Sonu',
//      pic  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmD6wGoqq588N6krGTOiAeDJ8HDROC7Db5bqXU3yRDz6XG5dxYOM77tzdicVzaS0JShkE&usqp=CAU"
//    }
//  ]  
// },
// {
//   id: "005",
//   name: 'Soorarai Pottru',
//   poster: 'https://i.pinimg.com/564x/3c/57/11/3c5711c122a1de55b347f38c4c2c006d.jpg',
//   rating: 8.7,
//   summary: 'Maara, a young man from a remote village, dreams of launching his own airline service. However, he must overcome several obstacles and challenges in order to be successful in his quest.',
//   trailer:"https://www.youtube.com/embed/fa_DIwRsa9o",
//   casts : 
//   [
//    {
//      name : "Surya",
//      pic  : "https://i.pinimg.com/236x/d3/bf/8e/d3bf8e40676f5c428db5dd73a60d3786.jpg"
//    },
//    {
//      name : "Aparna Balamurali",
//      pic  : "https://i.pinimg.com/236x/81/0b/a4/810ba44421cd8a473293aef926053daf.jpg"
//    },
//    {
//      name : 'Paresh Rawal',
//      pic  : "https://i.pinimg.com/236x/b2/2e/b4/b22eb489327ef660557b0704f2e022e8.jpg"
//    },
//    {
//      name : 'Krishnakumar Balasubramanian',
//      pic  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEiTE_OnrKUHtbTFrIe_atX38C1nlidA452UlwZfsDXHzgNtLq9fPvX_ThTAbYBABZRac&usqp=CAU"
//    },
//    {
//      name : 'Karunas',
//      pic  : "https://i.pinimg.com/236x/b8/a8/3e/b8a83e986c516ec9cf63ab2d8d5c687f.jpg"
//    },
//    {
//      name : 'Kaali Venkat',
//      pic  : "https://i.pinimg.com/236x/34/21/65/3421654bee41e114a0ea21169fbf1899.jpg"
//    }
//  ]  
// },
// {
//   id: "006",
//   name: 'Vaaranam Aayiram',
//   poster: 'https://i.pinimg.com/564x/e9/cc/65/e9cc65da756956b25d90ea13c7c83403.jpg',
//   rating: 8.2,
//   summary: "Surya, an NSG official, is on a mission to rescue someone when he gets the news of his father's demise. He starts reminiscing about the bond he shared with his father and the stories related to him.",
//   trailer:"https://www.youtube.com/embed/QdM9L1FxFkY",
//   casts : 
//   [
//    {
//      name : "Surya",
//      pic  : "https://i.pinimg.com/236x/d3/bf/8e/d3bf8e40676f5c428db5dd73a60d3786.jpg"
//    },
//    {
//      name : "Sameera Reddy",
//      pic  : "https://i.pinimg.com/236x/54/5d/86/545d8611b067219602e7b4c5b7d4d25f.jpg"
//    },
//    {
//      name : 'Simran',
//      pic  : "https://i.pinimg.com/236x/79/0f/ac/790facdeb17ea66b5f16990cb565dc2b.jpg"
//    },
//    {
//      name : 'Divya Spandana',
//      pic  : "https://i.pinimg.com/236x/5b/69/50/5b69505410e2cc2cc045b0901d2fddc6.jpg"
//    },
//    {
//      name : 'Babloo Prithiveeraj',
//      pic  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnsI_XcY88D2TT7hcZMakN3rhuB2X1Irw2hg&usqp=CAU"
//    },
//    {
//      name : 'VTV Ganesh',
//      pic  : "https://i.pinimg.com/236x/98/f4/2a/98f42aa6d9030a3833f96e0dad17b37f.jpg"
//    }
//  ]  
// },
// {
//   id: "007",
//   name: 'Vinnaithandi varuvaya',
//   poster: 'https://i.pinimg.com/564x/8b/31/e0/8b31e0a75af9ee7ed898e3207819754a.jpg',
//   rating: 8.1,
//   summary: 'A Hindu assistant director, Karthik, falls in love with Jessie, a Christian from a traditional family. Things change when Karthik becomes busy during a forty-day shoot in Goa.',
//   trailer: "https://www.youtube.com/embed/9z-NeZyiyF8",
//   casts : 
//   [
//    {
//      name : "Simbu",
//      pic  : "https://i.pinimg.com/236x/e8/34/2e/e8342ef40b239027e56bc5bfef409aa6.jpg"
//    },
//    {
//      name : "Trisha Krishnan",
//      pic  : "https://i.pinimg.com/236x/a0/38/4d/a0384d6907a8bcb6ed0f06688f532f1c.jpg"
//    },
//    {
//      name : 'VTV Ganesh',
//      pic  : "https://i.pinimg.com/236x/98/f4/2a/98f42aa6d9030a3833f96e0dad17b37f.jpg"
//    },
//    {
//      name : 'Samantha',
//      pic  : "https://i.pinimg.com/564x/5c/17/ae/5c17ae1a16980ae0c3dceb003d5aece6.jpg"
//    },
//    {
//      name : 'Naga Chaitanya',
//      pic  : "https://i.pinimg.com/236x/77/0d/eb/770deb5aa457c31bd686e92ab586543d.jpg"
//    },
//    {
//      name : 'Uma Padmanabhan',
//      pic  : "https://i.pinimg.com/564x/ef/53/7d/ef537d18b363124145ab82002075ce40.jpg"
//    }
//  ]  
// },
// {
//   id: "008",
//   name: 'Alai Payuthey',
//   poster: 'https://i.pinimg.com/564x/ec/66/97/ec66972648912b7aceda8fc0ced2761e.jpg',
//   rating: 8.3,
//   summary: "Karthik and Shakti marry against the wishes of their families and start their new life. However, they soon realise that marriage is not the bed of roses they had imagined it would be.",
//   trailer:"https://www.youtube.com/embed/BRFdGc3ku-k",
//   casts : 
//   [
//    {
//      name : "R. Madhavan",
//      pic  : "https://i.pinimg.com/236x/ec/14/9e/ec149ee653a8714d87e352793c1b1c7b.jpg"
//    },
//    {
//      name : "Shalini",
//      pic  : "https://i.pinimg.com/236x/ad/74/9e/ad749e69e9f858b1499e456161e8fe92.jpg"
//    },
//    {
//      name : 'Swarnamalya',
//      pic  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiQGOJXLCbg133t7s00a9tik0w3N0Kn59-pA&usqp=CAU"
//    },
//    {
//      name : 'Vivek',
//      pic  : "https://i.pinimg.com/236x/6f/32/9c/6f329cc5c16a87292d0a035347b63ad3.jpg"
//    },
//    {
//      name : 'Jayasudha',
//      pic  : "https://i.pinimg.com/236x/42/8c/76/428c7622a3c90eec930d8f435c23df0d.jpg"
//    },
//    {
//      name : 'Kushboo',
//      pic  : "https://i.pinimg.com/236x/a7/b6/82/a7b682f9844427572c51d7605326162a.jpg"
//    }
//  ]  
// },
// {
//   id: "009",
//   name: 'Ponniyin Selvan: I',
//   poster: 'https://i.pinimg.com/564x/e5/66/fc/e566fcb918c32685d6d2aff08d50745d.jpg',
//   rating: 7.8,
//   summary: "Vandiyathevan sets out to cross the Chola land to deliver a message from the crown prince Aditha Karikalan. Meanwhile, Kundavai attempts to establish political peace as vassals and petty chieftains plot against the throne.",
//   trailer:"https://www.youtube.com/embed/D4qAQYlgZQs",
//   casts : 
//   [
//    {
//      name : "Aishwarya Rai",
//      pic  : "https://i.pinimg.com/236x/48/7a/66/487a66ce1fa9e01181fa9f0fda81a55f.jpg"
//    },
//    {
//      name : "Vikram ",
//      pic  : "https://i.pinimg.com/236x/ce/18/22/ce182269cd7d8c8e2e77813a2cbaf612.jpg"
//    },
//    {
//     name : "Trisha Krishnan",
//     pic  : "https://i.pinimg.com/236x/a0/38/4d/a0384d6907a8bcb6ed0f06688f532f1c.jpg"
//   },
//    {
//      name : 'Jayam Ravi',
//      pic  : "https://i.pinimg.com/236x/75/77/4d/75774d0352d6cf47a7ef8b5dafe530e2.jpg"
//    },
//    {
//      name : 'Karthik',
//      pic  : "https://i.pinimg.com/236x/76/d3/a0/76d3a06779013c908e338595bb5759f2.jpg"
//    },
//    {
//      name : 'Aishwarya Lekshmi',
//      pic  : "https://i.pinimg.com/236x/a5/4e/9d/a54e9ddcadfd7f41182cec91193124ce.jpg"
//    }
//  ]  
// },
// {
//   id: "010",
//   name: 'Avatar',
//   poster: 'https://i.pinimg.com/564x/2b/14/98/2b149826f852f8aece90543a40daeb1e.jpg',
//   rating: 7.8,
//   summary: "Jake, who is paraplegic, replaces his twin on the Na'vi inhabited Pandora for a corporate mission. After the natives accept him as one of their own, he must decide where his loyalties lie.",
//   trailer:"https://www.youtube.com/embed/5PSNL1qE6VY",
//   casts : 
//   [
//    {
//      name : "Sam Worthington",
//      pic  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXuHUSYdDP5ytQg62iVQredvf6ahZrGpYCVQ&usqp=CAU"
//    },
//    {
//      name : "Zoe Saldaña",
//      pic  : "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRpvvoYY4EnR1LS-yCAvOtrl6WKM-q44tz6E-gRm2RIsEIWkBzJdawalQLP_cIL_mi53nXa1sw091fjntI"
//    },
//      {
//      name : 'Michelle Rodriguez',
//      pic  : "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTfUBchegN6Rx1AsAsCYoa0HiX8CEBmghbSW8luEgxxvrH4tgFdZyt9BDeV6RvA6bx-1-dL4ajo-g1l-hY"
//    },
//    {
//      name : 'Sigourney Weaver',
//      pic  : "https://i.pinimg.com/236x/cc/a2/de/cca2de9494ed2f490d03deb2e644def8.jpg"
//    },
//    {
//      name : 'Stephen Lang',
//      pic  : "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcS1mvVV1byKC2jBY4W-mpg5ku7KbV4lvaIZoiMte0RqSzYjf9zqW2bjL_HXIKY-JeIiThvV5DfL3kQjrN0"
//    },
//    {
//      name : 'Giovanni Ribisi',
//      pic  : "https://i.pinimg.com/236x/8f/8a/b6/8f8ab6757bd97ab4c0598c565659481c.jpg"
//    }
//  ]  
// },
// {
//   id: "011",
//   name: 'Avatar 2',
//   poster: 'https://i.pinimg.com/564x/df/7b/c9/df7bc982ed3c23912aebe4cce3d8940f.jpg',
//   rating: 8,
//   summary: "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora. When an ancient threat resurfaces, Jake must fight a difficult war against the humans.",
//   trailer:"https://www.youtube.com/embed/d9MyW72ELq0",
//   casts : 
//   [
//     {
//       name : "Sam Worthington",
//       pic  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXuHUSYdDP5ytQg62iVQredvf6ahZrGpYCVQ&usqp=CAU"
//     },
//     {
//       name : "Zoe Saldaña",
//       pic  : "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRpvvoYY4EnR1LS-yCAvOtrl6WKM-q44tz6E-gRm2RIsEIWkBzJdawalQLP_cIL_mi53nXa1sw091fjntI"
//     },
//       {
//       name : 'Michelle Rodriguez',
//       pic  : "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTfUBchegN6Rx1AsAsCYoa0HiX8CEBmghbSW8luEgxxvrH4tgFdZyt9BDeV6RvA6bx-1-dL4ajo-g1l-hY"
//     },
//     {
//       name : 'Sigourney Weaver',
//       pic  : "https://i.pinimg.com/236x/cc/a2/de/cca2de9494ed2f490d03deb2e644def8.jpg"
//     },
//     {
//       name : 'Vin Diesel',
//       pic  : "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSs7Zp6IVqeT1e9Fyrl1chSs0YtEkZw7oDxvi1zwQK4yZtqyBLRZqdli7CO15FTpFeNn773qRSAHvyLDks"
//     },
//     {
//       name : 'Giovanni Ribisi',
//       pic  : "https://i.pinimg.com/236x/8f/8a/b6/8f8ab6757bd97ab4c0598c565659481c.jpg"
//     }
//  ]   
// },
// {
//   id: "012",
//   name: 'After',
//   poster: 'https://i.pinimg.com/564x/9d/21/9a/9d219aa5939c5362193ba40a1faa728d.jpg',
//   rating: 5.3,
//   summary: "Tessa Young is a dedicated student, dutiful daughter and loyal girlfriend to her high school sweetheart. Entering her first semester of college, Tessa's guarded world opens up when she meets Hardin Scott, a mysterious and brooding rebel who makes her question all she thought she knew about herself -- and what she wants out of life.",
//   trailer:"https://www.youtube.com/embed/p13hKXKWtsU",
//   casts : 
//   [
//     {
//       name : "Josephine Langford",
//       pic  : "https://i.pinimg.com/236x/81/c6/a5/81c6a5583cb0c33463546abe06a1851a.jpg"
//     },    
//    {
//      name : "Hero Fiennes Tiffin",
//      pic  : "https://i.pinimg.com/236x/f6/11/7f/f6117fb9f55766775f033878047bef87.jpg"
//    },
//    {
//      name : 'Selma Blair',
//      pic  : "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSvzbfHpa3ESFEq2dn8DP3vR3JM2ioHccIDgSbl8Yk5qKoUpNjmTFATgnJLTd6B1tKubzRJ4_OW-Xd2OF4"
//    },
//    {
//      name : 'Dylan Arnold',
//      pic  : "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRyPQofL-koYIi7t6EZpZEZjSj8vBnQ4GmzR_t6C7V_LmhwTVzOpI1IWh8CPSKgu0eCLIoSkScTD2pe2Xc"
//    },
//    {
//      name : 'Inanna Sarkis',
//      pic  : "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRPzC0pGERPV8sQvXJHYT-odJO8aKDzMalIvPz8UqRAVlGn4AIQjJQ1UdC0Vmhd5m527dnUmwk4m5ErAc4"
//    },
//    {
//      name : 'Shane Paul McGhie',
//      pic  : "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQw1MrgPpx_XHghiZocxiTTT1As9D-b7MuXTVMWH3PAHW9UVaPxBXXtqDJpTisC-xylYhbs2CLi1_SOA5Y"
//    }
//  ]  
// },
// {
//   id: "013",
//   name: 'After We Collided',
//   poster: 'https://i.pinimg.com/564x/f7/ec/5a/f7ec5ad8eaaaf0ccc31ddafcb70df41a.jpg',
//   rating: 5,
//   summary: "Tessa finds herself struggling with her complicated relationship with Hardin; she faces a dilemma that could change their lives forever.",
//   trailer:"https://www.youtube.com/embed/2SvwX3ux_-8",
//   casts : 
//   [
//     {
//       name : "Josephine Langford",
//       pic  : "https://i.pinimg.com/236x/81/c6/a5/81c6a5583cb0c33463546abe06a1851a.jpg"
//     },    
//     {
//       name : "Hero Fiennes Tiffin",
//       pic  : "https://i.pinimg.com/236x/f6/11/7f/f6117fb9f55766775f033878047bef87.jpg"
//     },
//     {
//       name : 'Selma Blair',
//       pic  : "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSvzbfHpa3ESFEq2dn8DP3vR3JM2ioHccIDgSbl8Yk5qKoUpNjmTFATgnJLTd6B1tKubzRJ4_OW-Xd2OF4"
//     },
//     {
//       name : 'Dylan Sprouse',
//       pic  : "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRyPQofL-koYIi7t6EZpZEZjSj8vBnQ4GmzR_t6C7V_LmhwTVzOpI1IWh8CPSKgu0eCLIoSkScTD2pe2Xc"
//     },
//     {
//       name : 'Inanna Sarkis',
//       pic  : "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRPzC0pGERPV8sQvXJHYT-odJO8aKDzMalIvPz8UqRAVlGn4AIQjJQ1UdC0Vmhd5m527dnUmwk4m5ErAc4"
//     },
//     {
//       name : 'Candice King',
//       pic  : "https://i.pinimg.com/236x/28/38/70/283870074b201541f4e62d63ac440d45.jpg"
//     }
//  ]   
// },
// {
//   id: "014",
//   name: 'After We Fell',
//   poster: 'https://i.pinimg.com/564x/8f/b2/f6/8fb2f6b7ad75cb1894617e52c2153904.jpg',
//   rating: 4.7,
//   summary: "As Tessa makes a life-changing decision, revelations about her family and Hardin's past threaten to derail her plans and end the couple's intense relationship.",
//   trailer:"https://www.youtube.com/embed/3OHPCurXcTU",
//   casts : 
//   [
//     {
//       name : "Josephine Langford",
//       pic  : "https://i.pinimg.com/236x/81/c6/a5/81c6a5583cb0c33463546abe06a1851a.jpg"
//     },    
//     {
//       name : "Hero Fiennes Tiffin",
//       pic  : "https://i.pinimg.com/236x/f6/11/7f/f6117fb9f55766775f033878047bef87.jpg"
//     },
//     {
//       name : 'Arielle Kebbel',
//       pic  : "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQBITQACm6adf9Mwer2mfzfjfizr4MYPTp46qq2cu5wmfzKJl40EAYGwi7jIJ8iNzo5uBLzni7UCn6YkDM"
//     },
//     {
//       name : 'Carter Jenkins',
//       pic  : "https://i.pinimg.com/236x/0f/a3/aa/0fa3aa2aa449e1e04f4b3236a61c74e9.jpg"
//     },
//     {
//       name : 'Kiana Madeira',
//       pic  : "https://i.pinimg.com/236x/e1/f0/f2/e1f0f243545ca89323090e037e95546a.jpg"
//     },
//     {
//       name : 'Chance Perdomo',
//       pic  : "https://i.pinimg.com/236x/77/44/0c/77440cbd94d5267b7bb7f16c6c60a27d.jpg"
//     }
//  ]  
// },
// {
//   id: "015",
//   name: 'After Ever Happy',
//   poster: 'https://i.pinimg.com/564x/df/7b/0a/df7b0afd8ee709a7ddfd64b507a93859.jpg',
//   rating: 4.5,
//   summary: "As a shocking truth about a couple's families emerges, the two lovers discover they are not so different from each other. Tessa is no longer the sweet, simple girl she was when she met Hardin.",
//   trailer: "https://www.youtube.com/embed/hLQ-5exgctI",
//   casts : 
//   [
//     {
//       name : "Josephine Langford",
//       pic  : "https://i.pinimg.com/236x/81/c6/a5/81c6a5583cb0c33463546abe06a1851a.jpg"
//     },    
//     {
//       name : "Hero Fiennes Tiffin",
//       pic  : "https://i.pinimg.com/236x/f6/11/7f/f6117fb9f55766775f033878047bef87.jpg"
//     },
//     {
//       name : 'Arielle Kebbel',
//       pic  : "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQBITQACm6adf9Mwer2mfzfjfizr4MYPTp46qq2cu5wmfzKJl40EAYGwi7jIJ8iNzo5uBLzni7UCn6YkDM"
//     },
//     {
//       name : 'Carter Jenkins',
//       pic  : "https://i.pinimg.com/236x/0f/a3/aa/0fa3aa2aa449e1e04f4b3236a61c74e9.jpg"
//     },
//     {
//       name : 'Kiana Madeira',
//       pic  : "https://i.pinimg.com/236x/e1/f0/f2/e1f0f243545ca89323090e037e95546a.jpg"
//     },
//     {
//       name : 'Chance Perdomo',
//       pic  : "https://i.pinimg.com/236x/77/44/0c/77440cbd94d5267b7bb7f16c6c60a27d.jpg"
//     }
//  ]  
// },
// ];


function App() {
  // const [webSeriesList,setWebSeriesList] = useState(INITIAL_SERIES_LIST);
  // const [moviesList,setMoviesList]       = useState([]);
  const [mode,setMode]                   = useState("light")
  const navigate = useNavigate();
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

   return (
    
    <div className='App'>    
      {/* <Originals/> */}
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">    
      <Toolbar className='toolbar-btn'>

      <div>               
     <Button color='inherit' onClick={()=> navigate("/")}>Home</Button>
     <Button color='inherit' onClick={()=> navigate("/TVShows")}>TV Shows</Button>
     <Button color='inherit' onClick={()=> navigate("/Movies")}>Movies</Button>
     <Button color='inherit' onClick={()=> navigate("/TVShows/add")}>AddShows</Button>
     <Button color='inherit' onClick={()=> navigate("/Movies/add")}>AddMovies</Button>
     {/* <Button color='inherit' onClick={()=> navigate("/color-game")}>Colorgame</Button> */}
     </div>

     <Button 
      startIcon = {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      color='inherit' 
      onClick={()=> setMode(mode === "light" ? "dark" : "light")}
      >{(mode === "light" ? "dark" : "light")} Mode
     </Button>
     
     </Toolbar>
     </AppBar>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/TVShows" element={<TV_Shows/>}/>
          <Route path="/TVShows/:showId" element={<WebSeriesDetail/>}/>
          <Route path="/TVShows/edit/:showId" element={<EditShows/>}/>          
          <Route path="/webseries" element={<Navigate replace to ="/TVShows"/>}/>
          <Route path="/series" element={<Navigate replace to ="/TVShows"/>}/>
          <Route path="/TVShows/add" element={<Add_TV_Shows/>}/>
          {/* <Route path="/color-game" element={<AddColor/>}/> */}
          <Route path="/Movies" element={<Movies/>}/>
          <Route path="/films" element={<Navigate replace to = "/Movies"/>}/>
          <Route path="/Movies/:movieId" element={<MovieDetail/>}/>
          <Route path="/Movies/add" element={<Add_Movies/>}/>
          <Route path="/Movies/edit/:movieId" element={<EditMovies/>}/>
          <Route path="/form" element={<BasicForm/>}/>
          <Route path="/404" element={<NotFoundPage/>}/>
          <Route path="*" element={<Navigate replace to= "/404"/>}/>
      </Routes>
      </ThemeProvider>      
    </div> 
       
  );
}

export default App;
