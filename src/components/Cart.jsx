import React, { useState } from "react";
import Button, { styles } from "./Button";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
function Cart() {
    const items = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "11",
        "11",
        "11",
        "11",
        "11",
        "11",
        "11",
        "11",
        "11",
        "11",
    ]; // Example array of items

    const [modalState, setModalState] = useState(false);
    function openModal() {
        setModalState(true);
    }
    function closeModal() {
        setModalState(false);
    }
    return (
        <div className="Inventory-Grid">
            <Modal
                open={modalState}
                onClose={closeModal}
                center
            >
              <div>
                
              </div>
            </Modal>
            <div style={{ marginInline: "20px" }}>
                <h2>Cart Overview</h2>
            </div>
            <div className="Cart-Grid">
                <div className="Divider">
                    <div className="Cart-Button">
                        <Button
                            onClick={() => {
                                openModal();
                            }}
                            buttonStyle={styles.button}
                            title="Add Cart"
                        />
                    </div>
                    <div className="Card-1">
                        {items.map((item, index) => (
                            <div key={index} className="Box-1">
                                <h2>CART</h2>
                                <h1 id={`item-${index}`}>{item}</h1>
                                <ShoppingCartOutlinedIcon
                                    style={{
                                        margin: "0%",
                                        fontSize: 70,
                                        color: "black",
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Cart;
