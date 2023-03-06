# SSH muyltiple accounts Github

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
6. Then rename those ssh keys with with whatever file name you gave it, in this case mine is `id_rsa_personal` and `id_rsa_personal.pub`.
7. Now try to generate another one by following the same procedure again. I named my second keys `id_rsa_work` and `id_rsa_work.pub`.
--- 
## ✅ Adding ssh keys to github accounts (or whatever you use)
1. Go to your github account then go to `Settings -> SSH and GPG keys`. Click on `New SSH key` button.
2. Go to your terminal again and run this command: `cat ~/.ssh/<yourfilename>.pub` replacing `<yourfilename>` with `id_rsa.pub`.
3. After running the commands above, you'll see something like this: `ssh-rsa AAAAB...92989tQ== me@example.com`
4. Copy paste that to the key on your new ssh key form then give it whatever title you like.
5. Then do the same with the resot of the keys and related accounts.
---
## ✅ Configure SSH
1. On your terminal / CMD PROMPT, run this command: `touch ~/.ssh/config` this will create a file with the file name of config on the `~/.ssh` folder. 
2. Now Go to that folder and open that file with your text editor of choice.
3. Copy paste the following on it:
```
Host gh_work
    HostName github.com
    IdentityFile ~/.ssh/id_rsa_personal
```
* The `Host` is how you would referrence this credentials on your terminal. 
* The `HostName` is whatever platform you use, in this case `github.com`. 
* The `IdentityFile` is the `ssh key` to be used for this credential.

4. Now add another one. By the end you should have something like these
```
Host gh_work
    HostName github.com
    IdentityFile ~/.ssh/id_rsa_work

Host gh_personal
    HostName github.com
    IdentityFile ~/.ssh/id_rsa_personal
```

5. If something went wrong regarding the config file after cretiang the ssh keys try to use the following commands:
```
eval $(ssh-agent)

ssh-add ~/.ssh/id_rsa_fulltime
ssh-add ~/.ssh/id_rsa_portfolio
ssh-add ~/.ssh/id_rsa_personal
```
---
## ✅ Testing connection
1. On your terminal / CMD PROMPT, run `ssh -T git@<myHost>` replacing `myHost` with the host you wrote on the `config` file. Mine is `ssh -T git@id_rsa_personal`.
2. After running that command, you should see something like this: `Hi <username>! You've successfully authenticated, but GitHub does not provide shell access.`. 
3. Now you know it's working. Go ahead and test the other key you added.
---
## ✅ Cloning repository using a specific SSH key
1. For this example I will clone this repository: `https://github.com/aprilmintacpineda/chat-with-people-backend`.
2. Run `git clone git@<myHost>:aprilmintacpineda/chat-with-people-backend.git`. 
3. Replacing `myHost` with the Host you want that was specified on your `config`.
4. Ones it's done, you can run `git remote -v` and you'll see something like this:
```
origin	git@gh_personal:aprilmintacpineda/chat-with-people-backend.git (fetch)
origin	git@gh_personal:aprilmintacpineda/chat-with-people-backend.git (push)
```
* You see now that it would use my `gh_personal` keys everytime. 
* Now make changes and commit and push the changes. If all worked well you should get no errors.

5. If you already have an existing clone in your machine, you can do this:
```
git remote add origin git@<myHost>:aprilmintacpineda/chat-with-people-backend.git
OR
git remote set-url origin git@gh_metis:ionescuflorineugen/metis.git
```
6. Then simply push to that remote and you're all set, you can test the other key too!
7. You'll need also tyo setup an user for every project locally not globally
```
git config --unset --global user.name (delete global data)

git config user.email "my_office_email@gmail.com"
git config user.name "Rahul Pandey"
     
git config user.email "my-personal-email@gmail.com"
git config user.name "Rahul Pandey"

git config --list (see user data)
```
---
### 🪵 Resources
- https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/
- https://gist.github.com/aprilmintacpineda/f101bf5fd34f1e6664497cf4b9b9345f#generate-ssh-keys
