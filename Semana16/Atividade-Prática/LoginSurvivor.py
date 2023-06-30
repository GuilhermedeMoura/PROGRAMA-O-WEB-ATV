from flask import Flask, request

app = Flask(__name__)

# Modelo de sobrevivente
class Survivor:
    def __init__(self, name, password):
        self.name = name
        self.password = password

# Dados dos sobreviventes registrados (exemplo)
survivors = [
    Survivor("Joel", "12345"),
    Survivor("Ellie", "abcde"),
    Survivor("Tommy", "qwerty")
]

# Rota de login
@app.route("/login", methods=["POST"])
def login():
    name = request.form.get("name")
    password = request.form.get("password")

    # Verifica se o sobrevivente está registrado
    for survivor in survivors:
        if survivor.name == name and survivor.password == password:
            return "true"

    return "false"

if __name__ == "__main__":
    app.run()