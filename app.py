from flask import Flask, render_template, request, jsonify
import os
from langchain_openai import OpenAIEmbeddings
from langchain.chains.vectorstores import Chroma
from langchain.chains.question_answering import load_qa_chain
from langchain.callbacks import get_openai_callback
from openc import OpenCC
import openai

client = OpenAI()

openai.api_key = os.getenv('OPENAI_API_KEY')
