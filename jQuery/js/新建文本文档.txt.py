f=open('C:\\Users\\asd\\Documents\\GitHub\\myhexo2019\\jQuery掷骰子小游戏\\js\jquery.min.js','r')
d=f.readlines()
f.close()

f2=open('C:\\Users\\asd\\Documents\\GitHub\\myhexo2019\\jQuery掷骰子小游戏\\js\\t5.js','w+')
for i in d:
    for j in ['; ','{','},']:
       i= i.replace(j,j+'\n')
    for j in ['if','for','while','return']:
       i= i.replace(j,'\n'+j)
    f2.write(i)
f2.close()
