# Install Content and Experience Toolkit
1. Clone or download [Oracle Content and Experience - Toolkit](https://github.com/oracle/content-and-experience-toolkit)
2. Install the cec tool:
```
cd  <download-path>/content-and-experience-toolkit/sites
npm install
```
3. Put `cec` on your path:

> **Mac**:

```
sudo ln -s $PWD/content-and-experience-toolkit/sites/node_modules/.bin/cec /usr/local/bin/cec
```

> **Windows**:

Run `SystemPropertiesAdvanced.exe`, edit Environment Variables and add `<your download path>\content-and-experience-toolkit\sites\node_modules\.bin` to the `PATH` variable, replacing `<your download path>` as appropriate.

4. Run the command line utility `cec` to get help about the commands.
 
```
cec --help
```