import { useState } from "react";
import placeholderProduct from "../../model/products";
import BTN from "../../components/ui/button";
import Card from "../../components/ui/card";

function ProdutosList() {
    const [products] = useState(placeholderProduct);

    return <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        { products.map( product => 
            <Card.Block key={product?.id}>
                <Card.Title children={product.name} />
                <Card.Value value={product.value} />
                <Card.Wrap>
                    <BTN.Edit children="Editar" />
                    <BTN.Del children="Deletar" />
                </Card.Wrap>
            </Card.Block>
        )}
    </div>
}

export default ProdutosList