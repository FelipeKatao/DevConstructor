import os

_basedir= os.path.abspath(os.path.dirname(__file__))
DEBUG=False
ADMINS= frozenset(['felipe@semanaomini.com'])
SECRET_KEY = 'secretisdefinid'


SQLALCHEMY_DATABASE_URI = 'sqllite:///'+os.path.join(_basedir,'app.db')
DATABASE_CONECT_OPTION={}
THREADS_PER_PAGE=8
CSRF_ENABLED=True
CSRF_SESSION_KEY= 'SOMETHING_IMPOSSIBLE_TO_GUEES'
