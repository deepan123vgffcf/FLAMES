import mysql.connector
from flask import Flask,request
app = Flask(__name__)

@app.route('/process_numbers',methods = ['POST'])
def process_numbers():
    name1 = request.form['name1']
    name2 =   request.form['name2']

mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    passwd="15713007",
    database="flames"
  )
print("Connection is established...")

cursor=mydb.cursor()
  

sql = "INSERT INTO data(name1,name2) VALUES (%s, %s)"
values= ([name1,name2])
cursor.execute(sql, values)
mydb.commit()
mydb.close()
 
 return "thank you, database has been saved"

if __name__ == '__main__':
   app.run(debug = True)