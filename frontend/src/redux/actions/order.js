import axios from "axios";
import { server } from "../store";


export const createOrder =
  (
    shippingInfo,
    orderItems,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingCharges,
    totalAmount
  ) => async (dispatch) => {

    try {
        dispatch({
          type: "createOrderRequest",
        });
  
        const { data } = await axios.post(
          `${server}/createorder`,
          {
            shippingInfo,
            orderItems,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingCharges,
            totalAmount,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
  
        dispatch({
          type: "createOrderSuccess",
          payload: data.message,
        });
      } catch (error) {
        dispatch({
          type: "createOrderFail",
          payload: error.response.data.message,
        });
      }
    };
