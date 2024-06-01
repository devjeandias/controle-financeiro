import { useState } from "react";
import placeholderProduct from "../../model/products";
import { ButtonDel, ButtonEdit } from "../../components/ui/button";
import { Card, CardTitle, CardValue, CardCTAWrap } from "../../components/ui/card";

function ProdutosList() {
    const [products] = useState(placeholderProduct);

    return <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        { products.map( product => 
            <Card key={product?.id}>
                <CardTitle children={product.name} />
                <CardValue value={product.value} />
                <CardCTAWrap>
                    <ButtonEdit children="Editar" />
                    <ButtonDel children="Deletar" />
                </CardCTAWrap>
            </Card>
        )}
    </div>
}

export default ProdutosList