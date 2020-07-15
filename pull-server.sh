npm run build
git add .

git commit -am "Mail Portfolio bug"
git push apistore master
ssh agenda.plimsoftware.pt \
  'git -C /home/miguel/storeproj/apistore/ ' \
  'pull apistore master && ' \
  'pm2 restart apistore && sudo systemctl restart nginx'
