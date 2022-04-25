import {test, expect} from "vitest"
import {render} from "@testing-library/vue"
import userEvent from "@testing-library/user-event";
import FileUpload from "@/components/FileUpload.vue"

test('upload file', async () => {
    const screen = render(
        FileUpload
    )
    const file = new File(['hello'], 'hello.png', {type: 'image/png'})
    const input = screen.getByLabelText(/upload file/i)
  
    await userEvent.upload(input, file)
  
    expect(input.files[0]).toBe(file)
    expect(input.files.item(0)).toBe(file)
    expect(input.files).toHaveLength(1)
  })