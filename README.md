# Iframe integration demo

## Iframe Integration

To open a iframe use the snippet.
Pass the existing projectId for accessing the old project.
Pass a new projectId for creating a new project.

```jsx
function Iframe({ projectId, token }) {
  // Construct the iframe URL with the query parameters
  const iframeUrl = `https://app.dev.metaforms.ai/iframe/research-manager/${projectId}/plan?authToken=${encodeURIComponent(
    token || ""
  )}`;

  console.log("iframeUrl: ", iframeUrl);
  return (
    <div className="h-screen w-screen">
      <iframe
        src={iframeUrl}
        className="w-full h-full border-0"
        title="Metaforms <> Konovo Research Manager"
        allowFullScreen
      />
    </div>
  );
}
```

## Generate JWT Token

To generate a JWT token use the script.
You need to pass email id and registered org id to start consuming the konovo kb.

```python
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
```
