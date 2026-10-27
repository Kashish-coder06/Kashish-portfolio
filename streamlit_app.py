import streamlit as st
import os
import threading
import http.server
import socketserver

st.set_page_config(
    page_title="Kashish Kumari | Portfolio",
    page_icon="✨",
    layout="wide",
    initial_sidebar_state="collapsed",
)

# Custom full-screen iframe styling
st.markdown(
    """
    <style>
        #MainMenu {visibility: hidden;}
        header {visibility: hidden;}
        footer {visibility: hidden;}
        .block-container {
            padding: 0 !important;
            margin: 0 !important;
            max-width: 100% !important;
        }
        iframe {
            border: none;
            width: 100vw;
            height: 100vh;
        }
    </style>
    """,
    unsafe_allow_html=True,
)

PORT = 8085
OUT_DIR = os.path.join(os.path.dirname(__file__), "out")

class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=OUT_DIR, **kwargs)
    
    def log_message(self, format, *args):
        pass  # Suppress console logging

def start_server():
    socketserver.TCPServer.allow_reuse_address = True
    try:
        with socketserver.TCPServer(("", PORT), QuietHandler) as httpd:
            httpd.serve_forever()
    except Exception:
        pass

if "server_started" not in st.session_state:
    server_thread = threading.Thread(target=start_server, daemon=True)
    server_thread.start()
    st.session_state["server_started"] = True

import streamlit.components.v1 as components
components.iframe(f"http://localhost:{PORT}/", height=1000, scrolling=True)
