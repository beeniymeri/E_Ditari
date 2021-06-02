using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Nxenesit
{
    public class Edit
    {
        public class Command : IRequest
        {

            public Nxenesi Nxenesi { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var nxenesi = await _context.Nxenesi.FindAsync(request.Nxenesi.NxenesiID);

                _mapper.Map(request.Nxenesi, nxenesi);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}