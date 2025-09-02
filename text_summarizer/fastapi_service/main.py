from fastapi import FastAPI
from pydantic import BaseModel

# Create FastAPI app
app = FastAPI()

# Input model for POST request


class TextInput(BaseModel):
    text: str


@app.get("/health")
def health_check():
    """
    Health check endpoint.
    Node.js backend will call this to check if FastAPI is alive.
    """
    return {"status": "✅ FastAPI is running!"}


@app.post("/process-text")
def process_text(data: TextInput):
    """
    Example endpoint that converts incoming text to uppercase.
    Node.js backend will forward requests here.
    """
    processed = data.text.upper()
    return {"processed_text": processed}
