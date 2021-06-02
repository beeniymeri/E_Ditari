using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Nxenesit
{
    public class Delete
    {
        public class Command : IRequest{

            public int NxenesiID { get; set; }
        
        }
        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var nxenesi = await _context.Nxenesi.FindAsync(request.NxenesiID);

                _context.Remove(nxenesi);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}