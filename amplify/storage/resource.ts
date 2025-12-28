import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
    name: "sm2TestBucket",
    access: (allow) => ({
        "product-image/*": [
            allow.guest.to(["read"]),
            allow.authenticated.to(["read"]),
            allow.groups(["Admins"]).to(["read","write","delete"])
        ]
    })
})