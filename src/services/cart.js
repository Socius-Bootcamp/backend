const  { Cart, CartItem  }= require('../config');

class CartService{
    async createCart (userId){
        //Create the cart adding the User id as FK
        const cart =Cart.build({ 
            status: 'new',
            total: 0,
            date: new Date(),
            UserId: userId
        });
        await cart.save();
        return cart
    }
    
    
    async findCartbyId(id){
        //find the Cart by his own Id
        const cart = await Cart.findByPk(id,{ include: [CartItem] });
        if (cart===null){
            throw new Error('Cart not found');
        }else{
            return cart;
        }
    }

    async findCartbyUserId(userData) {
        //Find the Cart by the User Id that owns the cart. 
        const cart = await Cart.findOne({where: { UserId: userData.UserId}, include: [CartItem] });
        if (cart===null){
            throw new Error('User cart not found');
        }else{
            return cart;
        }
    }
    
    
    async updateCart(data){
        //update the Cart Data based on the values given
        await Cart.update(
            {
                status: data.status,
                total: data.total,
                date: new Date()
            },
            {
                where: {id:data.id}
            }
        );
        const cart = await Cart.findAll({where:{id:data.id}})
        if (cart===null){
            throw new Error('Cart not found');
        }else{
            return cart;
        }
    }



    async addProductToCart(data){
        // Verify if the item already exists in the Cart
        const exists= await CartItem.findOne({
            where:{
                CartId: data.CartId, 
                ProductId: data.ProductId
            }
        })
        if (!exists){
            //item doesn't exists in the cart -> building item and saving it on DB, update to Cart total and status
            const item= await CartItem.build({
                qty: data.qty,
                CartId: data.CartId,
                ProductId: data.ProductId
            })
            await item.save();
            await Cart.increment({total: +(data.price*data.qty)},{where: {id: data.CartId} });
            await Cart.update({status: "Buying"},{where: {id:data.CartId}});

        }else{
            //item already exists in the Cart -> update to Cart total and CartItem quantity info about the item
            const difference=(data.qty-exists.qty);
            await Cart.increment({total: +(data.price*difference)},{where: {id: data.CartId} });
            await CartItem.increment({qty: +difference},{where: {id: exists.id}});
        }
        //update the date of modification on the cart
        await Cart.update({date: new Date()},{where: {id:data.CartId}});
        const cart = await Cart.findAll({where:{id:data.CartId}})
        if (cart===null){
            throw new Error('Cart not found');
        }else{
            return cart;
        }

        
    }

    
}


module.exports = new CartService();