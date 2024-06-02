import { useState } from "react";
import placeholderOrders from "../../model/pedidos";
import Card from "../../components/ui/card";
import BTN from "../../components/ui/button";

function OrderList() {
    const [orders] = useState(placeholderOrders);

    return <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        { orders.map( order =>
            <Card.Block>
                <Card.Title>N° { order?.id }</Card.Title>
                <Card.Wrap>
                    <BTN.Edit children="Editar" />
                    <BTN.Del children="Deletar" />
                </Card.Wrap>
            </Card.Block>
        )}
    </div>
}

export default OrderList