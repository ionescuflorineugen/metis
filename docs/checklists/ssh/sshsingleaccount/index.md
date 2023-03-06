# SSH single account Github

## ✅ Generate SSH keys

1. Open your terminal / CMD PROMPT and type the following command: 
   - `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`
2. The command will ask ssh to generate a key for you. After running the command, you will see the following feedback:
   - `Generating public/private rsa key pair.`
3. The next line you will see would be:
   - `Enter file in which to save the key (/Users/sprlwrks/.ssh/id_rsa):` 
4. The default location if you dont change it: 
   - `/Users/[user-name]/.ssh/id_rsa`
5. It will generate two files. 
   - `id_rsa.pub`
     - *The id_rsa.pub contains your public key which you will use, you can give this to your team leader or to other people that you want.* 
   - `id_rsa` 
     - *The id_rsa is the private key, **don't want to give this key to anyone**.*
---
## ✅ Adding ssh keys to github accounts (or whatever you use)
1. Go to your github account then go to `Settings -> SSH and GPG keys`. Click on `New SSH key` button.
2. Go to your terminal again and run this command: `cat ~/.ssh/<yourfilename>.pub` replacing `<yourfilename>` with `id_rsa.pub`.
3. After running the commands above, you'll see something like this: `ssh-rsa AAAAB...92989tQ== me@example.com`.
4. Copy paste that to the key on your new ssh key form then give it whatever title you like.
---
## 🪵 Resources
- https://help.github.com/articles/connecting-to-github-with-ssh/ 