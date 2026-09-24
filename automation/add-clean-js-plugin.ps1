# Inserts a maven-clean-plugin execution that deletes generated .js files
# (tsc outDir is always ./src) before the exec-maven-plugin block that
# contains the tsc-compile execution, in every pom.xml under this workspace.

$marker = "            <plugin>`r`n                <groupId>org.codehaus.mojo</groupId>`r`n                <artifactId>exec-maven-plugin</artifactId>`r`n                <version>3.6.3</version>`r`n                <executions>`r`n                    <execution>`r`n                        <id>npm-install-typescript</id>"

$insertBlock = @'
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-clean-plugin</artifactId>
                <version>3.2.0</version>
                <executions>
                    <execution>
                        <id>clean-js-files</id>
                        <phase>generate-sources</phase>
                        <goals>
                            <goal>clean</goal>
                        </goals>
                        <configuration>
                            <excludeDefaultDirectories>true</excludeDefaultDirectories>
                            <filesets>
                                <fileset>
                                    <directory>${basedir}/src</directory>
                                    <includes>
                                        <include>**/*.js</include>
                                    </includes>
                                </fileset>
                            </filesets>
                        </configuration>
                    </execution>
                </executions>
            </plugin>

'@

$files = Get-ChildItem -Path . -Recurse -Filter pom.xml
$updated = 0
$skippedAlready = 0
$skippedNoMatch = 0

foreach ($f in $files) {
    $content = Get-Content $f.FullName -Raw
    if ($content -notmatch '<id>tsc-compile</id>') { continue }

    if ($content.Contains('<id>clean-js-files</id>')) {
        $skippedAlready++
        continue
    }

    if (-not $content.Contains($marker)) {
        $skippedNoMatch++
        Write-Output "NO MATCH: $($f.FullName)"
        continue
    }

    $newContent = $content.Replace($marker, $insertBlock + $marker)
    Set-Content -Path $f.FullName -Value $newContent -NoNewline
    $updated++
}

Write-Output "Updated: $updated"
Write-Output "Already had clean-js-files: $skippedAlready"
Write-Output "No marker match: $skippedNoMatch"
