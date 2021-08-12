def writeName(name):
  text_file = open("names.txt", "a")
  n = text_file.write('\n %s'%name)
  text_file.close()

writeName("Dima")