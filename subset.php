<?php
require_once 'assets.php';

$offset = $_GET['offset'] ?? 0;

$sql = "SELECT titulo, descricao, imagem_file 
        FROM publicacoes
        LIMIT 4
        OFFSET :offset";
$publicacoes = pdo($pdo, $sql, [$offset])->fetchAll();
?>

<?php foreach ($publicacoes as $publicacao) { ?>
    <article>
        <header>
            <h2><?= $publicacao['titulo'] ?></h2>
        </header>
        <section>
            <img src="imagens/<?= $publicacao['imagem_file'] ?>" alt="foto-teste">
        </section>
        <aside>
            <p><?= $publicacao['descricao'] ?></p>
        </aside>
    </article>
<?php } ?>