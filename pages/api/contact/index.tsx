import { CourierClient } from "@trycourier/courier";

const courier = CourierClient({ authorizationToken: "AUTH_TOKEN_COURIER" });

const requestId  = courier.send({
  message: {
    to: {
      email: "mimidevel.me@gmail.com",
    },
    template: "YJBB9BNKPEMYF8Q306RQQQARHQAR",
    data: {
    },
  },
});