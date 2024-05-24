import sqlite3

def create_connection(db_file):
    conn = sqlite3.connect(db_file)
    return conn

def execute_query(conn, query):
    cur = conn.cursor()
    cur.execute(query)
    conn.commit()

def select_query(conn, query):
    cur = conn.cursor()
    cur.execute(query)
    rows = cur.fetchall()
    return rows