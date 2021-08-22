data = {}  
choice=int(input("Choose: 1.Sign Up 2.Sign In 3.Exit: "))
while(choice<4):
    if(choice==1):
        user=input("Enter username: ")
        if(user in data.keys()):
            print("User already exists")
        else:
            pwd=input("Enter password: ")
            data[user]=pwd
    elif(choice==2):
        usercheck=input("Enter username: ")
        pwdcheck=input("Enter password: ")
        if(usercheck in data.keys()):
            if(data[usercheck]==pwdcheck):
                print("You're signed in!")
            else:
                print("Incorrect password")
        else:
            print("Invalid username & password")
    elif(choice==3):
        break
    else:
        print("Invalid Choice")
    choice=int(input("Choose: 1.Sign Up 2.Sign In 3.Exit: "))
print(data)
print(data.items())
print(data.keys())
print(data.values())