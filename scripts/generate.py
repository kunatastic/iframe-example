import datetime
import jwt

SECRET_KEY = "secret" # Replace this secret


class JWTService:
    @classmethod
    def encode_data(cls) -> str:
        data = {
          "email": "kunal@metaforms.ai",
          "org_id": "workhack",
          "exp": datetime.datetime.now(datetime.timezone.utc) + datetime.timedelta(hours=6)
        }
        token = jwt.encode(data, SECRET_KEY, algorithm="HS256")
        print("login token: ", token)
        return token

if __name__ == "__main__":
    JWTService.encode_data()