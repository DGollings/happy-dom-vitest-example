import {describe, it} from "vitest"
import {render} from "@testing-library/vue"
import App from "@/App.vue"

describe("example", () => {
    it("should show roles", () => {
        console.log(App)
        const {getByRole} = render(App)
        getByRole("img", {name: "Vue logo"})
    }
})