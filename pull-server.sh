npm run build
git add .

git commit -am "Associate Company to User"
git push apieasydesk master
ssh agenda.plimsoftware.pt \
  'git -C /home/miguel/apieasydesk/api/ ' \
  'pull apieasydesk master && ' \
  'pm2 restart apieasydesk && sudo systemctl restart nginx'
