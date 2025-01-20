<p>Для установки данного репозитория на локальной машине следуйте инструкции:</p><br/>
<b>1.</b> Создайте файл .env в корне проекта и пропишите в нем свою базу данных.<br/><br/>
<bold>2.</bold> Мигрируйте при помощи команды <bold>php artisan migrate</bold><br/>
<bold>3.</bold> Запустите <bold>php artisan tinker</bold> и выполните следующие 2 команды: <br/>
<bold>App\Models\User::factory()->count(1000)->create()</bold><br/><br/>
<bold>App\Models\Profile::factory()->count(1000)->create()</bold><br/><br/>
<bold>4.</bold> Сгенерируйте ключ:<br/>
<bold>php artisan key:generate</bold><br/><br/>
<bold>5.</bold> Запустите команду:<br/><br/>
<bold>npm run dev</bold><br/><br/>
<bold>6.</bold> Запустите команду:<br/><br/>
<bold>php artisan serve</bold><br/><br/>
<p>Далее переходите по адресу http://127.0.0.1:8000 - здесь Вы увидите само приложение.</p>
