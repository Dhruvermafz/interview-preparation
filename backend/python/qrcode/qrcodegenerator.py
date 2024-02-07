import qrcode
import image
qr = qrcode.QRCode(
    version = 15, #15 means the version of the qrcode hight the number bigger the code image and complicated picture
    box_size = 10,
    border = 5
)

data = "https://dhruvermafz.vercel.app"
qr.add_data(data)
qr.make(fit = True)
img = qr.make_image(fill="black",back_color="white")
img.save("test.png")