import createStore from "unistore";
import axios from 'axios';

const initState = {
    email:"",
    is_login:false,
    username:"",
    password:"",
    search:"",
    token:"",
    categorylist:[],
    productid:"",
    qtyorder:"",
    myProductList:[],
    cartid:"",
    cartlist:[],
    datacart:[],
    corsHandle:"https://cors-anywhere.herokuapp.com/",
    ipAddress:"http://13.58.84.95:8000/"

}


export const store = createStore(initState)
export const actions = store => ({
    changeInput: (state, event)=> {
        return{[event.target.name]: event.target.value};
    },

    signOut: state => {
        return {is_login:false};
    },
    signIn:  async state => {
        const self = this;
        const data = {username:state.username, password:state.password}
        let signIn = {
            method:'get',
            url: state.corsHandle + state.ipAddress + "/user/login",
            headers: {
                "X-Requested-With": "http://13.58.84.95"
            }, params : data
        };
        await axios(signIn)
        .then(function(response){
            console.log(response.data);
                store.setState({
                    "is_login": true,
                    "token":response.data.token
                    // "username": response.data.user_data.username,
                    // "email": response.data.user_data.email,
                    // "avatar": response.data.user_data.avatar       
                    });
       })
        .catch(function(error){
            console.log(error);
        })
    },
    getproductbyid: async (state, keyword) =>{
        let reqAdd = {
            method:'get',
            url: state.corsHandle + state.ipAddress +"public/product/" + keyword,
            headers: {
                "X-Requested-With": "http://13.58.84.95"
            },
        };
        axios(reqAdd)
        .then(function(response){
            store.setState({productbyid: response.data.product});
            console.log(response.data);
            
        });

    },
    postCart : state => {
        const data = {product_id:state.productid, qty:state.qtyorder}
        const token = state.token;
        let reqCart = {
            method:'post',
            url:state.corsHandle + state.ipAddress+'user/cart',
            headers: {
                'Authorization':'Bearer ' + token,
                "X-Requested-With": "http://13.58.84.95"
            },
            params : data
        };
        axios(reqCart)
        .then(function(response){
            console.log(response.data);
            alert("Produk sukses ditambahkan, silahkan cek di keranjang untuk melakukan chekout");
        })
        .catch(function(error){
            console.log(error);
        })
    },
    getCart : state => {
        const token = state.token;
        const mycart = {
            method: "get",
            url: state.corsHandle + state.ipAddress + "user/cart?rp=1000",
            headers: {
                'Authorization':'Bearer ' + token,
                "X-Requested-With": "http://13.58.84.95"
            }
        };
         axios(mycart)
        .then(function(response){
            store.setState({cartlist: response.data.cartList});
            store.setState({datacart: response.data});
            console.log(response.data);
        })
        .catch(function(error){
            console.log(error);
        })
        },

    deleteCart : state => {
        const cart_id = state.cartid;
        const token = state.token;
        let reqCart = {
            method:'delete',
            url:state.corsHandle + state.ipAddress+'user/cart/' + cart_id,
            // url:'http://localhost:8002/user/product',
            headers: {
                'Authorization':'Bearer ' + token,
                "X-Requested-With": "http://13.58.84.95"
            }
        };
        axios(reqCart)
        .then(function(response){
            console.log(response.data);
        })
        .catch(function(error){
            console.log(error);
        })
    },

    deleteProduct : state => {
        const product_id = state.productid;
        const token = state.token;
        let delProduct = {
            method:'delete',
            url:state.corsHandle + state.ipAddress+'user/product/' + product_id,
            // url:'http://localhost:8002/user/product',
            headers: {
                'Authorization':'Bearer ' + token,
                "X-Requested-With": "http://13.58.84.95"
            }
        };
        axios(delProduct)
        .then(function(response){
            console.log(response.data);
        })
        .catch(function(error){
            console.log(error);
        })
    },

    getMyProduct : state =>{
        const token = state.token;
        const my_product = {
            method: "get",
            url: state.corsHandle + state.ipAddress + 'user/product',
            headers: {
                'Authorization':'Bearer ' + token,
                "X-Requested-With": "http://13.58.84.95"
            }
        };
            axios(my_product)
        .then(function(response){
            store.setState({myProductList: response.data.productList});
            console.log(response.data);
        })
        .catch(function(error){
            console.log(error);
        })
    },

    handleClick:(state, value)=>{
        // e.preventDefault();
        console.log("event",value)
        const id = value;
        return{productid : id};
        // this.props.history.push("/productdetail");
    },


    rmCartClick:(state, value)=>{
        // e.preventDefault();
        console.log("event",value)
        const cart_id = value;
        return{cartid : cart_id};
        // this.props.history.push("/productdetail");
    },
     
    });
