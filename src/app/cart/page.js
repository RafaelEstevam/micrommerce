import { cookies } from "next/headers";

const Cart = () => {

    const {value} = cookies().get('theme');

    const setTheme = () => {
        switch(value){
            case 'black':
                return 'text-gray-600'
            case 'yellow':
                return 'text-yellow-400'
            case 'magenta':
                return 'text-pink-600'
            default:
                return 'text-blue-600'
        }
    }

    return (
        <>
            <h1 className={`${setTheme()} text-7xl`}>
                Carrinho
            </h1>
        </>
    )
};

export default Cart;