import React from "react"
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from "./style"
import TypeProduct from "../../components/TypeProduct/TypeProduct"
import SliderComponent from "../../components/SliderComponent/SliderComponent"
import slider1 from '../../assets/images/slider1.webp'
import slider2 from '../../assets/images/slider2.webp'
import slider3 from '../../assets/images/slider3.webp'
import CardComponent from "../../components/CardComponent/CardComponent"
import NavBarComponent from "../../components/NavbarComponent/NavBarComponent"
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent"

const HomePage = () => {
    const arr = ['TV', 'Tu lanh', 'Laptop']
    return (
        <>
            <div style={{ padding: '0 120px'}}>
            <WrapperTypeProduct>
                {arr.map((item) => {
                    return (
                        <TypeProduct name={item} key={item} />
                    )
                })}
            </WrapperTypeProduct>
            </div>
            <div className="body" style={{ width: '100%', backgroundColor: '#efefef'}}>
                <div id="cotainer" style={{ height: '1000px', width: '1270px', margin: '0 auto' }}>
                    <SliderComponent arrImages={[slider1, slider2, slider3]} />
                    <WrapperProducts>
                        <CardComponent/>
                        <CardComponent/>
                        <CardComponent/>
                        <CardComponent/>
                        <CardComponent/>
                        <CardComponent/>
                    </WrapperProducts>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                        <WrapperButtonMore textButton="Xem thêm" type="outline" styleButton={{
                            border: '1px solid rgb(11, 116, 229)', color: 'rgb(11, 116, 229)',
                            width: '240px', height: '38px', borderRadius: '4px'
                        }}
                            styleTextButton={{ fontWeight: 500}} />
                        {/* textbutton={isPreviousData ? 'Load more' : "Xem thêm"} type="outline" styleButton={{
                            border: `1px solid ${products?.total === products?.data?.length ? '#f5f5f5' : '#9255FD'}`, color: `${products?.total === products?.data?.length ? '#f5f5f5' : '#9255FD'}`,
                            width: '240px', height: '38px', borderRadius: '4px'
                        }}
                        disabled={products?.total === products?.data?.length || products?.totalPage === 1}
                        styleTextButton={{ fontWeight: 500, color: products?.total =    == products?.data?.length && '#fff' }}
                        onClick={() => setLimit((prev) => prev + 6)} */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage