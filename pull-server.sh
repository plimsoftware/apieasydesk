npm run build
git add .

git commit -am "Update cors v2"
git push apieasydesk master
ssh agenda.plimsoftware.pt \
  'git -C /home/miguel/apieasydesk/api/ ' \
  'pull apieasydesk master && ' \
  'pm2 restart apistore && sudo systemctl restart nginx'
