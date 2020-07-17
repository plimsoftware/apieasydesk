npm run build
git add .

git commit -am "Update Token and return profile"
git push apieasydesk master
ssh agenda.plimsoftware.pt \
  'git -C /home/miguel/apieasydesk/api/ ' \
  'pull apieasydesk master && ' \
  'pm2 restart apieasydesk && sudo systemctl restart nginx'
