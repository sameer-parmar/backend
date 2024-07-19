import numpy as np
import pandas as pd
import json
exfile='data.xlsx'
df = pd.read_excel(exfile)

data =df.to_dict('records')
with open('data.json','w') as f:
    json.dump(data,f, indent =4)
    