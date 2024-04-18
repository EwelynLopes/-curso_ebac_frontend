$(document).ready(function () {
  function displayDate() {
    let currentDate = new Date();
    let formattedDate = currentDate.toLocaleDateString('pt-BR');
    $('#current-date').text('Data: ' + formattedDate);
  }

  displayDate();

  $('#task-form').submit(function (e) {
    e.preventDefault();
    let taskName = $('#task-input').val();
    if (taskName.trim() !== '') {
      $('#task-list').append('<li><input type="checkbox" class="task-checkbox"><span class="task-name">' + taskName + '</span><button class="edit"><i class="fas fa-pencil-alt"></i> Editar</button><button class="delete"><i class="fas fa-trash-alt"></i> Excluir</button></li>');
      $('#task-input').val('');
      $('.edit, .delete').show();
    }
  });

  $(document).on('change', '.task-checkbox', function () {
    $(this).siblings('.task-name').toggleClass('completed');
  });

  $(document).on('click', '.delete', function () {
    $(this).parent().remove();
  });

  $(document).on('click', '.edit', function () {
    let taskName = $(this).siblings('.task-name').text();
    let newTaskName = prompt('Editar Tarefa:', taskName);
    if (newTaskName && newTaskName.trim() !== '') {
      $(this).siblings('.task-name').text(newTaskName);
    }
  });
});