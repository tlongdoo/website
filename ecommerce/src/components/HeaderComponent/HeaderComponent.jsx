import { Badge, Col } from "antd"
import React from "react"
import { WrapperHeader, WrapperHeaderAccout, WrapperTextHeader, WrapperTextHeaderSmall } from "./style"
//import Search from "antd/lib/transfer/search"
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import ButttonInputSearch from "../ButtonInputSearch/ButttonInputSearch"

const HeaderComponent = () => {
    return (
        <div style={{ height: '100%', width: '100%',background: '#9255FD', justifyContent: 'center' }}>
            <WrapperHeader >
                <Col span={5}>
                    <WrapperTextHeader>L - Phone</WrapperTextHeader>
                </Col>
                <Col span={13}>
                    <ButttonInputSearch
                        size= "large"
                        bordered={false}
                        textButton="Tìm kiếm" 
                        placeholder="input search text"
                        
                        // onSearch={onSearch}
                    />
                </Col>
                <Col span={6} style={{display: 'flex', gap: '54px', alignItems: 'center'}}>
                    <WrapperHeaderAccout>
                        <UserOutlined style={{ fontSize: '30px' }}/>
                        <div>
                            <WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
                            <div>
                            <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                            <CaretDownOutlined />
                            </div>
                        </div>
                    </WrapperHeaderAccout>
                    <div>
                        <Badge count={4} size="small">
                            <ShoppingCartOutlined style={{ fontSize: '30px', color : '#fff' }}/>
                        </Badge>
                        <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
                    </div>
                </Col>
            </WrapperHeader>
        </div>
    )
}

export default HeaderComponent