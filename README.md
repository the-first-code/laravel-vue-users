<p>Для установки данного репозитория на локальной машине следуйте инструкции:</p><br/>
<b>1.</b> Создайте файл .env в корне проекта и пропишите в нем свою базу данных.<br/><br/>
<b>2.</b> Мигрируйте при помощи команды <b>php artisan migrate</b><br/><br/>
<b>3.</b> Запустите <b>php artisan tinker</b> и выполните следующие 2 команды: <br/>
<b>App\Models\User::factory()->count(1000)->create()</b><br/>
<b>App\Models\Profile::factory()->count(1000)->create()</b><br/><br/>
<b>4.</b> Сгенерируйте ключ:<br/>
<b>php artisan key:generate</b><br/><br/>
<b>5.</b> Запустите команду:<br/>
<b>npm run dev</b><br/><br/>
<b>6.</b> Запустите команду:<br/>
<b>php artisan serve</b><br/><br/>
<p>Далее переходите по адресу http://127.0.0.1:8000 - здесь Вы увидите само приложение.</p>
