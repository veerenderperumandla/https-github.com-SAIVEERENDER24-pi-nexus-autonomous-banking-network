from .bank import Bank

class StanbicBank(Bank):
    def __init__(self, username, password):
        super().__init__(username, password)
        self.name = "Stanbic Bank"
        self.url = "https://www.stanbicbank.co.ug"
        self.login_url = "https://ibank.stanbicbank.co.ug/login"
        self.accounts_url = "https://ibank.stanbicbank.co.ug/accounts"
        self.headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
        }

    def login(self):
        # code for logging into Stanbic Bank goes here

    def get_accounts(self):
        # code for getting account information from Stanbic Bank goes here

    def get_transactions(self, account_id):
        # code for getting transaction history from Stanbic Bank goes here
