for x in os.listdir():
   if x.endswith(".html") and not x == "Documentation.html":
     print(x)
     file = open(x, "r")
     pyperclip.copy(file.read())
     file.close()
     input()
     file = open(x, "w")
     file.write(pyperclip.paste())
     file.close()

